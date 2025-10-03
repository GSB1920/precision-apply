import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import logoImage from '../../../../../shared/assets/logo.png'
const PublicHeader = () => {
  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
        <img 
            src={logoImage}
            alt="Precision Apply Logo"
            className="h-8 w-8 object-contain"
        />
        <span className="font-black text-foreground text-lg">
            Precision Apply
        </span>
        </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
             {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons - Right Side */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <Button variant="outline" className="text-sm">
              Login
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu - Right Side */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-6 w-6 text-indigo-600" />
                      <span className="font-black text-foreground text-lg">
                        Precision Apply
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button variant="outline" className="justify-start">
                      Login
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white justify-start">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PublicHeader