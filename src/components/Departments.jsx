import { Activity, Briefcase, Monitor, Heart, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n'

const icons = [Activity, Briefcase, Monitor, Heart]
const colors = [
  'bg-blue-50 text-blue-600 border-blue-100',
  'bg-green-50 text-green-600 border-green-100',
  'bg-purple-50 text-purple-600 border-purple-100',
  'bg-red-50 text-red-600 border-red-100'
]

export default function Departments() {
  const { t } = useLang()

  return (
    <section id="departments" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.departments.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.departments.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t.departments.subheading}</p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.departments.names.map((name, i) => {
            const Icon = icons[i]
            const colorClass = colors[i]
            return (
              <div key={name} className="group card-hover bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col sm:flex-row gap-6 items-start">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a3a5c] mb-2 font-display group-hover:text-[#c0392b] transition-colors">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.departments.desc[i]}</p>
                  <button className="text-[#1a3a5c] font-semibold text-sm flex items-center gap-2 hover:text-[#c0392b] transition-colors">
                    {t.departments.explore} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
