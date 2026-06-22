import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { useLang } from '../i18n'

export default function News() {
  const { t } = useLang()

  return (
    <section id="news" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.news.tag}</span>
            <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.news.heading}</h2>
            <div className="section-divider w-20 mt-3" />
          </div>
          <button className="inline-flex items-center gap-2 text-[#1a3a5c] font-semibold hover:text-[#c0392b] transition-colors text-sm">
            {t.news.viewAll} <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.news.items.map((article, i) => {
            const colorClass = i % 2 === 0 ? (i === 0 ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700') : (i === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
            return (
              <div
                key={article.title}
                className={`card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Color bar */}
                <div className={`h-1.5 bg-gradient-to-r ${i % 2 === 0 ? 'from-[#1a3a5c] to-[#2a5a8c]' : 'from-[#c0392b] to-[#e74c3c]'}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1a3a5c] text-sm leading-snug mb-2 hover:text-[#c0392b] cursor-pointer transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{article.excerpt}</p>

                  <div className="flex items-center gap-3 text-gray-400 text-xs pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
