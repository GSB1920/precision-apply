// src/components/common/DashboardPreview.tsx
import React from 'react'

interface DashboardPreviewProps {
  title: string
  score: number
  stats: Array<{ value: string; label: string; color: string }>
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ title, score, stats }) => {
  return (
    <div className="relative animate-float">
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
        
        {/* ATS Score */}
        <div className="text-center mb-6">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 p-1">
              <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-400">{score}</span>
              </div>
            </div>
          </div>
          <p className="text-slate-300">ATS Compatibility Score</p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview