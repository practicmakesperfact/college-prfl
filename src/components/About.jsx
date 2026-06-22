import { CheckCircle2, Target, Eye } from 'lucide-react'
import { useLang } from '../i18n'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.about.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.about.heading}</h2>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {t.about.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mission & Vision cards */}
          <div className="space-y-5">
            <div id="mission" className="card-hover bg-gradient-to-br from-[#1a3a5c] to-[#0f2540] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                  <Target className="text-yellow-400" size={20} />
                </div>
                <h3 className="text-xl font-bold font-display">{t.about.missionTitle}</h3>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div id="vision" className="card-hover bg-gradient-to-br from-[#c0392b] to-[#a93226] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold font-display">{t.about.visionTitle}</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {t.about.visionText}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.about.infoLabels.map((label, i) => (
                <div key={label} className="bg-gray-50 rounded-xl p-4 text-center card-hover border border-gray-100">
                  <div className="text-2xl font-bold text-[#1a3a5c]">{t.about.infoValues[i]}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
