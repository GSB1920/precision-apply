import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import logoImage from '../../../../../shared/assets/logo.png'
const PublicHeader = () => {
        const navigationItems = [
          { label: 'Features', href: '#features' },
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Pricing', href: '#pricing' },
        ]

  return (
    <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-white">PrecisionApply</span>
      </div>

      {/* Desktop Navigation - Centered */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-slate-300 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Desktop Auth Button */}
      <div className="hidden md:block">
        <Button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors">
          Sign In
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-900 border-slate-700">
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="font-bold">PrecisionApply</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col space-y-4 mt-6">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              
              <div className="pt-4 border-t border-slate-700">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white w-full justify-start">
                  Sign In
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>
  )
}

export default PublicHeader