import { useEffect, useRef, useState } from 'react'
import { Users, BookOpen, Award, Briefcase } from 'lucide-react'
import { useLang } from '../i18n'

const stats = [
  { icon: Users, value: 5000, suffix: '+', color: 'from-blue-500 to-blue-700' },
  { icon: BookOpen, value: 120, suffix: '+', color: 'from-red-500 to-red-700' },
  { icon: Award, value: 200, suffix: '+', color: 'from-yellow-500 to-yellow-700' },
  { icon: Briefcase, value: 98, suffix: '%', color: 'from-green-500 to-green-700' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, index, inView, label }) {
  const count = useCountUp(stat.value, 2000, inView)
  const Icon = stat.icon
  return (
    <div
      className={`card-hover bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden group border border-gray-100 animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
        <Icon className="text-white" size={26} />
      </div>
      <div className="stat-number text-4xl font-extrabold text-[#1a3a5c] mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useLang()
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider w-20 mb-8 mx-auto" />
        <h2 className="text-center text-3xl font-bold text-[#1a3a5c] mb-12 font-display">
          {t.stats.heading}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} inView={inView} label={t.stats.items[i]} />)}
        </div>
      </div>
    </section>
  )
}
