import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FeatureCard from '@/components/common/FeatureCard'
import StepCard from '@/components/common/StepCard'
import TestimonialCard from '@/components/common/TestimonialCard'
import DashboardPreview from '@/components/common/DashboardPreview'
import {
  HERO_CONTENT,
  FEATURES_CONTENT,
  HOW_IT_WORKS_CONTENT,
  SOCIAL_PROOF_CONTENT,
  CTA_CONTENT,
  DASHBOARD_PREVIEW
} from '../../../constant/content'

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {HERO_CONTENT.title.prefix} <span className="text-red-400">{HERO_CONTENT.title.highlighted[0]}</span> {HERO_CONTENT.title.suffix} <span className="text-emerald-400">{HERO_CONTENT.title.highlighted[1]}</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {HERO_CONTENT.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 animate-pulse">
                {HERO_CONTENT.cta.primary}
              </Button>
              <Button variant="outline" className="border-slate-600 hover:border-emerald-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-emerald-500/10 text-white">
                {HERO_CONTENT.cta.secondary}
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-slate-400">
              {HERO_CONTENT.badges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <DashboardPreview {...DASHBOARD_PREVIEW} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{FEATURES_CONTENT.title}</h2>
          <p className="text-xl text-slate-300">{FEATURES_CONTENT.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_CONTENT.items.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{HOW_IT_WORKS_CONTENT.title}</h2>
          <p className="text-xl text-slate-300">{HOW_IT_WORKS_CONTENT.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{SOCIAL_PROOF_CONTENT.title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {SOCIAL_PROOF_CONTENT.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold text-${stat.color}-400`}>
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SOCIAL_PROOF_CONTENT.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Company Logos */}
        <div className="text-center">
          <p className="text-slate-400 mb-8">Our users have been hired by:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {SOCIAL_PROOF_CONTENT.companies.map((company, index) => (
              <div key={index} className="bg-slate-700 px-6 py-3 rounded-lg hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer grayscale brightness-75">
                <span className="text-lg font-bold text-white">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">{CTA_CONTENT.title}</h2>
          <p className="text-xl mb-8 text-white/90">{CTA_CONTENT.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              {CTA_CONTENT.buttons.primary}
            </Button>
            <Button variant="outline" className="border-2 border-white hover:bg-white hover:text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-white">
              {CTA_CONTENT.buttons.secondary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage