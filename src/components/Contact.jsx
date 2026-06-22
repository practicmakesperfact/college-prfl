import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const icons = [Phone, Mail, MapPin, Clock]

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest">{t.contact.tag}</span>
          <h2 className="text-4xl font-bold text-[#1a3a5c] mt-2 font-display">{t.contact.heading}</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">{t.contact.subheading}</p>
          <div className="section-divider w-20 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2540] rounded-2xl p-7 text-white">
              <h3 className="text-xl font-bold font-display mb-5">{t.contact.infoTitle}</h3>
              <div className="space-y-4">
                {t.contact.labels.map((label, i) => {
                  const Icon = icons[i]
                  return (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">{label}</div>
                        <div className="text-white text-sm font-medium">{t.contact.values[i]}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social media quick links */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-white/50 text-xs mb-3">{t.contact.followUs}</div>
                <div className="flex gap-3">
                  {['FB', 'TW', 'YT', 'IG'].map((s) => (
                    <button key={s} className="w-9 h-9 rounded-lg bg-white/10 text-white/70 text-xs font-bold hover:bg-yellow-400/30 hover:text-yellow-300 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={32} className="mx-auto mb-2 text-[#1a3a5c]" />
                <p className="text-sm font-medium">{t.contact.mapCaption}</p>
                <p className="text-xs">{t.contact.mapSub}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="text-green-500 mb-4" size={60} />
                  <h3 className="text-2xl font-bold text-[#1a3a5c] font-display mb-2">{t.contact.successTitle}</h3>
                  <p className="text-gray-500 mb-6">{t.contact.successText}</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary text-white px-8 py-3 rounded-full font-semibold">
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#1a3a5c] font-display mb-1">{t.contact.formTitle}</h3>
                  <p className="text-gray-400 text-sm mb-4">{t.contact.formSub}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.name} <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePH}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.email} <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPH}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.subject} <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={t.contact.subjectPH}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.contact.message} <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t.contact.messagePH}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/30 focus:border-[#1a3a5c] transition-all bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={16} /> {t.contact.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
