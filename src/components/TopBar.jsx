import { Phone, Mail, MapPin } from 'lucide-react'

// Inline SVG social icons (lucide-react dropped brand icons)
const SocialIcon = ({ path, label }) => (
  <a href="#" aria-label={label} className="hover:text-yellow-300 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={path} />
    </svg>
  </a>
)

const socials = [
  {
    label: 'Facebook',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Twitter / X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'Telegram',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
]

export default function TopBar() {
  return (
    <div className="bg-[#1a3a5c] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <a href="tel:+251912345678" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <Phone size={13} />
            <span>+251 91 234 5678</span>
          </a>
          <a href="mailto:info@addinas-college.edu.et" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
            <Mail size={13} />
            <span>info@addinas-college.edu.et</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>Addis Ababa, Ethiopia</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <SocialIcon key={s.label} path={s.path} label={s.label} />
          ))}
          <div className="ml-2 flex gap-1 text-xs">
            <button className="px-2 py-0.5 bg-white/20 rounded hover:bg-white/30 transition-colors">EN</button>
            <button className="px-2 py-0.5 rounded hover:bg-white/20 transition-colors">አማ</button>
          </div>
        </div>
      </div>
    </div>
  )
}
