import { TestimonialCardProps } from './types'

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, initial, gradient }) => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold`}>
          {initial}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </div>
      </div>
      <p className="text-slate-300">"{content}"</p>
    </div>
  )
}

export default TestimonialCard