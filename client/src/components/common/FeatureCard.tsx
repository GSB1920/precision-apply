// src/components/common/FeatureCard.tsx
import React from 'react'
import { CheckCircle, Zap } from 'lucide-react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  score?: number
  keywords?: string[]
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, score, keywords }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'score':
        return (
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 p-1">
              <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-400">{score}</span>
              </div>
            </div>
          </div>
        )
      case 'keywords':
        return (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {keywords?.map((keyword, i) => (
                <span key={i} className="bg-sky-500/10 border border-sky-500/30 text-sky-400 px-3 py-1 rounded-full text-sm hover:bg-sky-500/20 hover:scale-105 transition-all cursor-pointer">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )
      case 'ai':
        return (
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        )
      case 'check':
        return (
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 text-center border border-slate-600 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20">
      {renderIcon()}
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}

export default FeatureCard