import { useEffect, useState } from 'react'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { useLang } from '../i18n'

const slideBgs = [
  'from-[#1a3a5c] via-[#1a3a5c]/80 to-[#c0392b]/60',
  'from-[#0a2540] via-[#1a3a5c]/80 to-[#1a7a4c]/60',
  'from-[#2c1a5c] via-[#1a3a5c]/80 to-[#c0392b]/50',
]

export default function Hero({ onApplyClick }) {
  const { t } = useLang()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visible, setVisible] = useState(true)

  const slides = t.hero.slides.map((s, i) => ({
    ...s,
    bg: slideBgs[i] || slideBgs[0],
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentSlide((s) => (s + 1) % slides.length)
        setVisible(true)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] to-[#0f2540]">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
      </div>

      <div className={`relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Text */}
        <div className="text-white space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold px-4 py-2 rounded-full animate-fade-up">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-display animate-fade-up delay-100">
            {slide.title}
          </h1>

          <p className="text-yellow-400 text-lg font-semibold animate-fade-up delay-200">
            {slide.subtitle}
          </p>

          <p className="text-white/75 text-base leading-relaxed max-w-lg animate-fade-up delay-300">
            {slide.desc}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
            <button
              onClick={onApplyClick}
              className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold shadow-2xl"
            >
              {t.hero.startReg} <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300"
            >
              {t.hero.explore}
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 pt-4 animate-fade-up delay-500">
            {t.hero.stats.map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{num}</div>
                <div className="text-white/60 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side visual */}
        <div className="hidden lg:flex justify-center items-center animate-fade-right">
          <div className="relative">
            {/* Main card */}
            <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl w-80 animate-float">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-5 shadow-xl">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-white text-2xl font-bold text-center font-display">Addinas College</h3>
              <p className="text-white/60 text-sm text-center mt-2">{t.hero.cardSubtitle}</p>
              <div className="mt-5 space-y-2">
                {t.hero.cardItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {item}
                  </div>
                ))}
              </div>
              <button onClick={onApplyClick} className="w-full mt-5 btn-primary text-white py-3 rounded-xl text-sm font-semibold">
                {t.hero.applyToday}
              </button>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 border border-white/20 animate-float delay-200">
              <div className="text-yellow-400 font-bold text-lg">A+</div>
              <div className="text-white/60 text-xs">{t.hero.floatAccredited}</div>
            </div>
            <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 border border-white/20 animate-float delay-400">
              <div className="text-green-400 font-bold text-lg">20+</div>
              <div className="text-white/60 text-xs">{t.hero.floatYears}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 h-2.5 bg-yellow-400' : 'w-2.5 h-2.5 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/50 flex flex-col items-center gap-1 text-xs animate-float">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
