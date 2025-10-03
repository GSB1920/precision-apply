import { FOOTER_CONTENT, APP_CONFIG } from '../../../../constant/content'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">{APP_CONFIG.name}</span>
            </div>
            <p className="text-slate-400">
              {APP_CONFIG.tagline}
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(FOOTER_CONTENT.links).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} {APP_CONFIG.name}. {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer