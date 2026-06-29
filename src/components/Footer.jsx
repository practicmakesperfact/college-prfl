import { GraduationCap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n'

const socialIcons = [
  { label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
  { label: 'Twitter / X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { label: 'Telegram', path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
]

const quickLinkHrefs = ['#home', '#about', '#programs', '#admissions', '#news', '#contact']

export default function Footer({ onApplyClick }) {
  const currentYear = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="bg-[#0a1e36] text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-[#c0392b] to-[#e74c3c] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold font-display">{t.footer.ctaHeading}</h3>
            <p className="text-white/80 text-sm mt-1">{t.footer.ctaSub}</p>
          </div>
          <button
            onClick={onApplyClick}
            className="shrink-0 bg-white text-[#c0392b] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
          >
            {t.footer.applyNow} <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="text-[#1a3a5c]" size={26} />
            </div>
            <div>
              <div className="text-white font-bold text-xl leading-tight font-display">BRUH</div>
              <div className="text-yellow-400 text-xs font-medium tracking-widest uppercase">College</div>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            {t.footer.tagline}
          </p>
          <div className="flex gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-yellow-400/30 hover:text-yellow-400 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t.footer.quickLinks}</h4>
          <ul className="space-y-2.5">
            {t.footer.links.map((link, i) => (
              <li key={link}>
                <a
                  href={quickLinkHrefs[i]}
                  onClick={(e) => { e.preventDefault(); document.querySelector(quickLinkHrefs[i])?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="text-white/55 text-sm hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-yellow-400 transition-colors" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t.footer.programsTitle}</h4>
          <ul className="space-y-2.5">
            {t.footer.programs.map((prog) => (
              <li key={prog}>
                <a href="#programs" className="text-white/55 text-sm hover:text-yellow-400 transition-colors flex items-center gap-1.5 group" onClick={(e) => { e.preventDefault(); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-yellow-400 transition-colors" />
                  {prog}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{t.footer.contactTitle}</h4>
          <div className="space-y-3">
            {[
              { icon: Phone, text: t.contact.values[0] },
              { icon: Mail, text: t.contact.values[1] },
              { icon: MapPin, text: t.contact.values[2] },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-2.5 text-white/55 text-sm">
                <Icon size={15} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-white/55 text-xs mb-2">{t.footer.newsletter}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPH}
                className="flex-1 bg-white/10 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-yellow-400/50"
              />
              <button className="bg-yellow-400 text-[#1a3a5c] px-3 py-2 rounded-lg hover:bg-yellow-300 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>{t.footer.rights.replace('{{year}}', currentYear.toString())}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white/70 transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white/70 transition-colors">{t.footer.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
