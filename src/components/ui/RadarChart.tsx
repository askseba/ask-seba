"use client"
import { motion } from "framer-motion"
import { useMemo } from "react"

interface RadarPoint {
  name: string
  score: number
  color: string
}

interface RadarChartProps {
  data?: RadarPoint[]
  size?: number
}

const DEFAULT_SAMPLE_DATA: RadarPoint[] = [
  { name: "فلورال", score: 85, color: "#10B981" },
  { name: "خشبي", score: 75, color: "#F59E0B" },
  { name: "حمضيات", score: 30, color: "#EF4444" },
  { name: "شرقي", score: 45, color: "#3B82F6" },
  { name: "منعش", score: 60, color: "#8B5CF6" },
  { name: "توابل", score: 70, color: "#EC4899" },
]

export function RadarChart({ data, size = 400 }: RadarChartProps) {
  const points = useMemo(() => {
    const dataset = data || DEFAULT_SAMPLE_DATA
    const radius = size * 0.4
    const center = size / 2
    return dataset.map((item, i) => {
      const angle = (i / dataset.length) * 2 * Math.PI - Math.PI / 2
      return {
        ...item,
        x: center + (item.score / 100) * radius * Math.cos(angle),
        y: center + (item.score / 100) * radius * Math.sin(angle),
        angle,
      }
    })
  }, [data, size])

  const radius = size * 0.4
  const polygonPath = points.map(p => `${p.x},${p.y}`).join(" ")

  return (
    <div className="w-[400px] h-[400px] flex items-center justify-center shadow-radar" dir="rtl">
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
        aria-label="رادار تطابق العطور"
        role="img"
      >
        {/* Grid - 5 levels */}
        {[1, 2, 3, 4, 5].map((level) => {
          const r = (radius * level) / 5
          return (
            <motion.circle
              key={`grid-${level}`}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="#5B4233"
              strokeOpacity="0.1"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + level * 0.1 }}
            />
          )
        })}

        {/* Axes */}
        {points.map((point, i) => (
          <line
            key={`axis-${i}`}
            x1={size / 2}
            y1={size / 2}
            x2={size / 2 + radius * Math.cos(point.angle)}
            y2={size / 2 + radius * Math.sin(point.angle)}
            stroke="#5B4233"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        ))}

        {/* Main Polygon */}
        <motion.polygon
          points={polygonPath}
          fill="rgba(192, 132, 26, 0.2)"
          stroke="#c0841a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data Points + Labels */}
        {points.map((point, i) => (
          <g key={`point-${i}`}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill={point.color}
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              whileHover={{ scale: 1.5 }}
            />
            <motion.text
              x={point.x}
              y={point.y - 25}
              textAnchor="middle"
              fill="#5B4233"
              fontSize="12"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
            >
              {point.name}
            </motion.text>
            <motion.text
              x={point.x}
              y={point.y + 5}
              textAnchor="middle"
              fill={point.color}
              fontSize="14"
              fontWeight="bold"
            >
              {point.score}%
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  )
}

// Export sample data for testing
export const RADAR_SAMPLE_DATA = [
  { name: "فلورال", score: 85, color: "#10B981" },
  { name: "خشبي", score: 75, color: "#F59E0B" },
  { name: "حمضيات", score: 30, color: "#EF4444" },
  { name: "شرقي", score: 45, color: "#3B82F6" },
  { name: "منعش", score: 60, color: "#8B5CF6" },
  { name: "توابل", score: 70, color: "#EC4899" },
]
