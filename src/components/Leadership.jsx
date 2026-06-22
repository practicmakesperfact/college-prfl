import { Mail } from 'lucide-react'
import { useLang } from '../i18n'

export default function Leadership() {
  const { t } = useLang()

  return (
    <section id="leadership" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.leadership.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.leadership.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t.leadership.subheading}</p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.leadership.names.map((name, i) => (
            <div key={name} className="group card-hover">
              <div className="bg-gradient-to-b from-[#1a3a5c] to-[#0f2540] rounded-3xl p-6 aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden mb-5">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl border border-white/20">
                  {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-white font-bold text-lg">{name}</h3>
                  <p className="text-yellow-400 text-sm font-medium mt-1">{t.leadership.roles[i]}</p>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4 gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-white hover:text-yellow-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button className="text-white hover:text-yellow-400 transition-colors"><Mail size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
