import { FileText, CreditCard, Folder, CheckCircle2, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n'

const reqIcons = [
  { icon: FileText, color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-600' },
  { icon: CreditCard, color: 'bg-red-50 border-red-200', iconColor: 'text-red-600' },
  { icon: Folder, color: 'bg-yellow-50 border-yellow-200', iconColor: 'text-yellow-600' },
]

export default function Admissions({ onApplyClick }) {
  const { t } = useLang()

  const steps = t.admissions.steps.map((s, i) => ({
    num: String(i + 1).padStart(2, '0'),
    title: s.title,
    desc: s.desc,
  }))

  const requirements = t.admissions.requirements.map((r, i) => ({
    ...reqIcons[i],
    title: r.title,
    items: r.items,
  }))

  return (
    <section id="admissions" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.admissions.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.admissions.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            {t.admissions.subheading}
          </p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        {/* How to Register Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#1a3a5c] text-center mb-10 font-display">{t.admissions.howTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100 relative overflow-hidden animate-fade-up`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="absolute top-3 right-3 text-5xl font-extrabold text-gray-200 leading-none select-none">{step.num}</div>
                <div className="w-10 h-10 rounded-xl bg-[#1a3a5c] flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-yellow-400" size={20} />
                </div>
                <h4 className="font-bold text-[#1a3a5c] mb-2 text-base">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1a3a5c] text-center mb-10 font-display">{t.admissions.reqTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, i) => {
              const Icon = req.icon
              return (
                <div key={req.title} className={`card-hover rounded-2xl p-6 border ${req.color} animate-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${req.iconColor}`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800">{req.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2540] rounded-3xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)'}} />
          <h3 className="text-3xl font-bold font-display mb-3 relative z-10">{t.admissions.ctaHeading}</h3>
          <p className="text-white/70 mb-6 relative z-10 max-w-md mx-auto">{t.admissions.ctaSubtitle}</p>
          <button
            onClick={onApplyClick}
            className="btn-primary inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-base font-semibold shadow-2xl relative z-10"
          >
            {t.admissions.startReg} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
