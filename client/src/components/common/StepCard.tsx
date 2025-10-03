import { Upload, CheckCircle, Download } from 'lucide-react'
import { StepCardProps } from './types'

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon, index }) => {
  const colors = [
    'from-sky-500 to-blue-500',
    'from-emerald-500 to-teal-500', 
    'from-amber-500 to-orange-500'
  ]
  const stepColors = ['bg-sky-500', 'bg-emerald-500', 'bg-amber-500']

  const renderIcon = () => {
    const IconComponent = icon === 'upload' ? Upload : icon === 'analysis' ? CheckCircle : Download
    return <IconComponent className="w-8 h-8 text-white" />
  }

  return (
    <div className="group bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:bg-slate-800/90">
      <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${colors[index]} rounded-2xl flex items-center justify-center`}>
        {renderIcon()}
      </div>
      <div className={`w-8 h-8 mx-auto mb-4 ${stepColors[index]} text-white rounded-full flex items-center justify-center font-bold`}>
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}

export default StepCard