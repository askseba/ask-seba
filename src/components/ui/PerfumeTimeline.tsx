'use client'
import React from 'react'

interface TimelineStageProps {
  stage: string
  icon: string
  title: string
  subtitle: string
  notes: string
  matchPercentage: number
  status: string
  bgColor: string
  delay?: number
}

export function TimelineStage({ 
  stage, 
  icon, 
  title, 
  subtitle,
  notes, 
  matchPercentage, 
  status,
  bgColor,
  delay = 0 
}: TimelineStageProps) {
  const getStatusColor = () => {
    if (matchPercentage >= 90) return { bg: 'bg-green-100', text: 'text-green-600', bar: 'bg-green-500' };
    if (matchPercentage >= 80) return { bg: 'bg-orange-100', text: 'text-orange-600', bar: 'bg-orange-500' };
    return { bg: 'bg-red-100', text: 'text-red-600', bar: 'bg-red-500' };
  };

  const colors = getStatusColor();

  return (
    <div 
      className="w-[320px] h-[120px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#5B4233]/5 p-4 flex gap-4 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group"
      style={{ 
        animation: `fadeInUp 0.5s ease-out ${delay}s both`,
        fontFamily: '"Noto Sans Arabic", "Manrope", sans-serif'
      }}
    >
      {/* Icon Section */}
      <div className={`w-20 h-full ${bgColor} rounded-xl flex flex-col items-center justify-center gap-1 shrink-0 group-hover:scale-105 transition-transform`}>
        <span className="text-3xl">{icon}</span>
        <span className="text-[10px] font-bold text-[#5B4233]/70 uppercase">{stage}</span>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="text-base font-bold text-[#5B4233] leading-tight truncate">{title}</h4>
            <p className="text-[10px] text-[#5B4233]/60">{subtitle}</p>
          </div>
          <div className={`${colors.bg} ${colors.text} px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0`}>
            {matchPercentage}%
          </div>
        </div>

        {/* Notes */}
        <p className="text-xs text-[#5B4233]/70 leading-tight truncate">{notes}</p>

        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-[#5B4233]/10 rounded-full overflow-hidden">
            <div 
              className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
              style={{ width: `${matchPercentage}%` }}
            />
          </div>
          <span className="text-[10px] font-medium text-[#5B4233]/60">{status}</span>
        </div>
      </div>
    </div>
  );
}

interface PerfumeTimelineProps {
  variant?: 'safe' | 'warning' | 'danger'
  stages?: Array<{
    stage: string
    icon: string
    title: string
    subtitle: string
    notes: string
    matchPercentage: number
    status: string
    bgColor: string
  }>
}

export function PerfumeTimeline({ variant = 'safe', stages }: PerfumeTimelineProps) {
  const defaultTimelineData = {
    safe: [
      {
        stage: 'Top',
        icon: '🌅',
        title: 'الافتتاحية',
        subtitle: '0-30 دقيقة',
        notes: 'برغموت • فلفل • ليمون',
        matchPercentage: 92,
        status: 'ممتاز ✨',
        bgColor: 'bg-yellow-50'
      },
      {
        stage: 'Heart',
        icon: '💙',
        title: 'القلب',
        subtitle: '2-4 ساعات',
        notes: 'لافندر • باتشولي • جيرانيوم',
        matchPercentage: 88,
        status: 'رائع 🌟',
        bgColor: 'bg-blue-50'
      },
      {
        stage: 'Base',
        icon: '🎯',
        title: 'القاعدة',
        subtitle: '4+ ساعات',
        notes: 'أمبروكسان • أرز • فيتيفر',
        matchPercentage: 90,
        status: 'مثالي 👌',
        bgColor: 'bg-green-50'
      }
    ],
    warning: [
      {
        stage: 'Top',
        icon: '🌅',
        title: 'الافتتاحية',
        subtitle: '0-30 دقيقة',
        notes: 'جريب فروت • زنجبيل • نعناع',
        matchPercentage: 85,
        status: 'جيد',
        bgColor: 'bg-yellow-50'
      },
      {
        stage: 'Heart',
        icon: '💙',
        title: 'القلب',
        subtitle: '2-4 ساعات',
        notes: 'ياسمين • ورد • قرنفل',
        matchPercentage: 75,
        status: 'متوسط ⚠️',
        bgColor: 'bg-orange-50'
      },
      {
        stage: 'Base',
        icon: '🎯',
        title: 'القاعدة',
        subtitle: '4+ ساعات',
        notes: 'عنبر • مسك • صندل',
        matchPercentage: 82,
        status: 'جيد',
        bgColor: 'bg-green-50'
      }
    ],
    danger: [
      {
        stage: 'Top',
        icon: '🌅',
        title: 'الافتتاحية',
        subtitle: '0-30 دقيقة',
        notes: 'ليمون • بهارات • فلفل أسود',
        matchPercentage: 78,
        status: 'جيد',
        bgColor: 'bg-yellow-50'
      },
      {
        stage: 'Heart',
        icon: '💙',
        title: 'القلب',
        subtitle: '2-4 ساعات',
        notes: 'الياسمين (حساسية) • ورد',
        matchPercentage: 65,
        status: 'تحذير ⚠️',
        bgColor: 'bg-red-50'
      },
      {
        stage: 'Base',
        icon: '🎯',
        title: 'القاعدة',
        subtitle: '4+ ساعات',
        notes: 'عود • فانيليا • تونكا',
        matchPercentage: 72,
        status: 'متوسط',
        bgColor: 'bg-orange-50'
      }
    ]
  };

  const timelineData = stages || defaultTimelineData[variant];

  return (
    <div className="flex flex-col gap-6 items-center" style={{ fontFamily: '"Noto Sans Arabic", "Manrope", sans-serif' }}>
      {/* Vertical Stack of Cards */}
      {timelineData.map((stage, index) => (
        <TimelineStage key={index} {...stage} delay={index * 0.2} />
      ))}
    </div>
  );
}

export default PerfumeTimeline;
