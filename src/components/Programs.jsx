import { useState } from 'react'
import { ArrowRight, Clock, Users, BookOpen, FlaskConical, Stethoscope, TrendingUp, Cpu, Building2 } from 'lucide-react'
import { useLang } from '../i18n'

const programIcons = [BookOpen, FlaskConical, Clock]
const programColors = [
  'from-[#1a3a5c] to-[#2a5a8c]',
  'from-[#c0392b] to-[#e74c3c]',
  'from-[#d4a843] to-[#f39c12]',
]
const courseIcons = [
  [Stethoscope, TrendingUp, Cpu, Building2],
  [FlaskConical, FlaskConical, Stethoscope, Cpu],
  [Clock, Clock, Cpu, BookOpen],
]

export default function Programs({ onApplyClick }) {
  const [selected, setSelected] = useState(null)
  const { t } = useLang()

  return (
    <section id="programs" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.programs.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.programs.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            {t.programs.subheading}
          </p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.programs.items.map((prog, i) => {
            const Icon = programIcons[i]
            const color = programColors[i]
            const icons = courseIcons[i]
            const isOpen = selected === i
            return (
              <div
                key={i}
                className={`card-hover bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Color header */}
                <div className={`bg-gradient-to-br ${color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">{prog.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display leading-tight">{prog.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-white/70 text-xs">
                    <Clock size={12} />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{prog.desc}</p>

                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">{t.programs.availableCourses}</div>
                    <div className="space-y-2">
                      {prog.courses.map((courseName, ci) => {
                        const CourseIcon = icons[ci] || BookOpen
                        return (
                          <div key={ci} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center">
                              <CourseIcon size={12} className="text-[#1a3a5c]" />
                            </div>
                            {courseName}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={onApplyClick}
                      className="btn-primary flex-1 text-white py-2.5 rounded-xl text-sm font-semibold"
                    >
                      {t.programs.registerNow}
                    </button>
                    <button
                      onClick={() => setSelected(isOpen ? null : i)}
                      className="flex items-center gap-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors font-medium"
                    >
                      {t.programs.learnMore} <ArrowRight size={14} />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-3 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fade-up">
                      <p className="text-sm text-[#1a3a5c] font-medium mb-2">{t.programs.highlights}</p>
                      <ul className="text-xs text-gray-600 space-y-1.5">
                        {t.programs.highlightItems.map((item, hi) => (
                          <li key={hi}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
