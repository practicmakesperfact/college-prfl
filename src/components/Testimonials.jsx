import { Star, Quote } from 'lucide-react'
import { useLang } from '../i18n'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1a3a5c] to-[#0f2540]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">{t.testimonials.tag}</span>
          <h2 className="text-4xl font-bold text-white mt-2 font-display">{t.testimonials.heading}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={item.name}
              className={`glass rounded-2xl p-6 border border-white/15 card-hover animate-fade-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="text-yellow-400/60 mb-3" size={28} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < (i === 3 ? 4 : 5) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}
                  />
                ))}
              </div>

              <p className="text-white/75 text-sm leading-relaxed mb-5">"{item.text}"</p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-white/50 text-xs leading-tight">{item.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
