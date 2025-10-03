import { ArrowRight, CheckCircle, Star, Users, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoImage from '../../../../shared/assets/logo.png'

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Get instant feedback on your resume with advanced AI technology'
    },
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through Applicant Tracking Systems'
    },
    {
      icon: CheckCircle,
      title: 'Keyword Matching',
      description: 'Match job requirements with optimized keywords and phrases'
    },
    {
      icon: Users,
      title: 'Industry Insights',
      description: 'Get industry-specific recommendations and best practices'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'Precision Apply helped me land 3 interviews in one week!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      content: 'The AI feedback was incredibly detailed and actionable.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Designer',
      content: 'Finally, a tool that understands what recruiters are looking for.',
      rating: 5
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo in Hero Section */}
            <div className="flex justify-center mb-8">
              <img 
                src={logoImage}
                alt="Precision Apply Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Hired Faster with
              <span className="text-indigo-600 block">AI-Optimized Resumes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload your resume and job description to get instant AI-powered feedback, 
              ATS optimization, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src={logoImage}
                alt="Precision Apply Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Precision Apply?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform gives you the edge you need to stand out in today's competitive job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-lg border bg-card">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src={logoImage}
                alt="Precision Apply Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your resume optimized in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Upload Resume', description: 'Paste your current resume content' },
              { step: '2', title: 'Add Job Description', description: 'Include the job posting you\'re applying for' },
              { step: '3', title: 'Get AI Feedback', description: 'Receive detailed analysis and recommendations' }
            ].map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src={logoImage}
                alt="Precision Apply Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful job seekers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map(({ name, role, content, rating }) => (
              <div key={name} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={logoImage}
              alt="Precision Apply Logo"
              className="h-16 w-16 object-contain filter brightness-0 invert"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully optimized their resumes with Precision Apply.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage