import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { useLang } from '../i18n'

export default function Gallery() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.gallery.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.gallery.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t.gallery.subheading}</p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {t.gallery.categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === i ? 'bg-[#1a3a5c] text-white' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.gallery.titles.map((title, i) => (
            <div key={title} className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
              <img 
                src={`https://picsum.photos/seed/addinas${i}/600/600`} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/90 via-[#1a3a5c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <h3 className="text-white font-bold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
