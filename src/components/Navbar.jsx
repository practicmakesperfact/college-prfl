import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, GraduationCap, Globe } from 'lucide-react'
import { useLang } from '../i18n'

export default function Navbar({ activePage, setActivePage, onApplyClick }) {
  const { lang, setLang, t } = useLang()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: t.nav.home },
    {
      id: 'about', label: t.nav.about, children: [
        { id: 'mission', label: t.nav.mission },
        { id: 'leadership', label: t.nav.leadership },
        { id: 'gallery', label: t.nav.gallery },
      ]
    },
    {
      id: 'academics', label: t.nav.academics, children: [
        { id: 'programs', label: t.nav.programs },
        { id: 'departments', label: t.nav.departments },
        { id: 'library', label: t.nav.library },
      ]
    },
    { id: 'admissions', label: t.nav.admissions },
    { id: 'news', label: t.nav.news },
    { id: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClick = () => setLangMenuOpen(false)
    if (langMenuOpen) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [langMenuOpen])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActivePage(id)
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  const switchLang = (newLang) => {
    setLang(newLang)
    setLangMenuOpen(false)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a3a5c] shadow-2xl py-2' : 'bg-[#1a3a5c]/95 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="text-[#1a3a5c]" size={26} />
          </div>
          <div className="text-left">
            <div className="text-white font-bold text-lg leading-tight font-display">ADDINAS</div>
            <div className="text-yellow-400 text-xs font-medium tracking-widest uppercase">College</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <button
                onClick={() => link.children ? setOpenDropdown(openDropdown === link.id ? null : link.id) : scrollToSection(link.id)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 nav-link relative
                  ${activePage === link.id ? 'text-yellow-400' : 'text-white/90 hover:text-yellow-300'}`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === link.id ? 'rotate-180' : ''}`} />}
              </button>
              {link.children && openDropdown === link.id && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 z-50 animate-fade-up">
                  {link.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => scrollToSection(child.id)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3a5c] font-medium transition-colors"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Language Switcher + Apply */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangMenuOpen(!langMenuOpen) }}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{lang === 'en' ? 'EN' : 'አማ'}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-xl shadow-2xl py-1 border border-gray-100 z-50 animate-fade-up">
                <button
                  onClick={() => switchLang('en')}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-2
                    ${lang === 'en' ? 'text-[#1a3a5c] bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span className="text-base">🇬🇧</span> English
                  {lang === 'en' && <span className="ml-auto text-yellow-500">✓</span>}
                </button>
                <button
                  onClick={() => switchLang('am')}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-2
                    ${lang === 'am' ? 'text-[#1a3a5c] bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <span className="text-base">🇪🇹</span> አማርኛ
                  {lang === 'am' && <span className="ml-auto text-yellow-500">✓</span>}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onApplyClick}
            className="btn-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg"
          >
            {t.nav.applyNow}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f2540] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.id}>
              <button
                onClick={() => link.children ? setOpenDropdown(openDropdown === link.id ? null : link.id) : scrollToSection(link.id)}
                className="w-full flex items-center justify-between text-white/90 hover:text-yellow-300 py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown size={14} className={`transition-transform ${openDropdown === link.id ? 'rotate-180' : ''}`} />}
              </button>
              {link.children && openDropdown === link.id && (
                <div className="ml-4 space-y-1 mt-1">
                  {link.children.map((child) => (
                    <button key={child.id} onClick={() => scrollToSection(child.id)} className="w-full text-left text-white/70 hover:text-yellow-300 py-2 px-3 text-sm transition-colors">
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 pt-2 px-3">
            <button
              onClick={() => switchLang('en')}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${lang === 'en' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => switchLang('am')}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${lang === 'am' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
            >
              🇪🇹 አማርኛ
            </button>
          </div>

          <button onClick={onApplyClick} className="w-full btn-primary text-white py-3 rounded-full text-sm font-semibold mt-3">
            {t.nav.applyNow}
          </button>
        </div>
      )}
    </nav>
  )
}
