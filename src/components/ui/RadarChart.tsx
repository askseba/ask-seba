'use client'
import React, { useState } from 'react'

interface RadarDataPoint {
  label: string
  value: number
  color?: string
}

interface RadarChartProps {
  data: RadarDataPoint[]
  maxValue?: number
  size?: number
  className?: string
}

export function RadarChart({ 
  data, 
  maxValue = 100, 
  size = 320,
  className = ''
}: RadarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Default 6-axis radar chart (hexagon)
  const axes = data.length || 6
  const center = 50
  const radius = 40

  // Calculate positions for each axis
  const getAxisPoint = (index: number, value: number) => {
    const angle = (index * 360) / axes - 90 // Start from top
    const radian = (angle * Math.PI) / 180
    const distance = (value / maxValue) * radius
    const x = center + distance * Math.cos(radian)
    const y = center + distance * Math.sin(radian)
    return { x, y }
  }

  // Generate polygon points for the data
  const polygonPoints = data
    .map((point, index) => getAxisPoint(index, point.value))
    .map(({ x, y }) => `${x},${y}`)
    .join(' ')

  // Generate grid circles
  const gridLevels = 3
  const gridPolygons = Array.from({ length: gridLevels }, (_, i) => {
    const level = (i + 1) / gridLevels
    const levelRadius = radius * level
    const points = Array.from({ length: axes }, (_, j) => {
      const angle = (j * 360) / axes - 90
      const radian = (angle * Math.PI) / 180
      const x = center + levelRadius * Math.cos(radian)
      const y = center + levelRadius * Math.sin(radian)
      return `${x},${y}`
    }).join(' ')
    return points
  })

  // Generate axis lines
  const axisLines = Array.from({ length: axes }, (_, i) => {
    const angle = (i * 360) / axes - 90
    const radian = (angle * Math.PI) / 180
    const x = center + radius * Math.cos(radian)
    const y = center + radius * Math.sin(radian)
    return { x1: center, y1: center, x2: x, y2: y }
  })

  // Get label positions
  const getLabelPosition = (index: number) => {
    const angle = (index * 360) / axes - 90
    const radian = (angle * Math.PI) / 180
    const labelRadius = radius + 8
    const x = center + labelRadius * Math.cos(radian)
    const y = center + labelRadius * Math.sin(radian)
    
    let alignment: { x: string; y: string } = { x: '50%', y: '50%' }
    if (Math.abs(angle) < 10 || Math.abs(angle) > 170) {
      alignment = { x: '50%', y: '0%' } // Top
    } else if (Math.abs(angle) > 80 && Math.abs(angle) < 100) {
      alignment = { x: '50%', y: '100%' } // Bottom
    } else if (angle > 0 && angle < 90) {
      alignment = { x: '0%', y: '0%' } // Top-right
    } else if (angle > 90 && angle < 180) {
      alignment = { x: '0%', y: '100%' } // Bottom-right
    } else if (angle < 0 && angle > -90) {
      alignment = { x: '100%', y: '0%' } // Top-left
    } else {
      alignment = { x: '100%', y: '100%' } // Bottom-left
    }

    // Fixed duplicate x by spreading alignment first
    return {
      ...alignment,
      x: `${x}%`,
      y: `${y}%`
    }
  }

  return (
    <div 
      className={`relative w-full aspect-square max-w-[${size}px] mx-auto bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ maxWidth: `${size}px` }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      {/* SVG Chart */}
      <div className="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center p-6">
        <svg 
          className="w-full h-full overflow-visible" 
          viewBox="0 0 100 100"
        >
          {/* Grid circles */}
          <g className="stroke-slate-200 fill-none" strokeWidth="0.5">
            {gridPolygons.map((points, i) => (
              <polygon key={i} points={points} />
            ))}
            
            {/* Axis lines */}
            {axisLines.map((line, i) => (
              <line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
              />
            ))}
          </g>

          {/* Data polygon */}
          <polygon
            className="stroke-primary fill-primary/20 filter drop-shadow-[0_0_8px_rgba(236,156,19,0.3)]"
            points={polygonPoints}
            strokeLinejoin="round"
            strokeWidth="1.5"
          />

          {/* Data points */}
          {data.map((point, index) => {
            const { x, y } = getAxisPoint(index, point.value)
            const isHovered = hoveredIndex === index
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 3 : 2}
                  className="fill-white stroke-primary transition-all"
                  strokeWidth={isHovered ? 2 : 1}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ cursor: 'pointer' }}
                />
                {isHovered && (
                  <text
                    x={x}
                    y={y - 4}
                    className="text-[8px] font-bold fill-primary"
                    textAnchor="middle"
                  >
                    {point.value}%
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        {/* Labels */}
        {data.map((point, index) => {
          const pos = getLabelPosition(index)
          return (
            <span
              key={index}
              className={`absolute text-xs font-bold text-slate-800 pointer-events-none`}
              style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
                textAlign: 'center' as const
              }}
            >
              {point.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default RadarChart
