import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-[#1a3a5c] text-white flex items-center justify-center shadow-xl hover:bg-[#c0392b] transition-all duration-300 hover:scale-110 animate-fade-up"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
