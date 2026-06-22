import { useState } from 'react'
import { X, CheckCircle2, ChevronRight, User, Mail, Phone, MapPin, BookOpen, Clock, FileText } from 'lucide-react'
import { useLang } from '../i18n'

const programsList = [
  'Health Information Management (BSc)',
  'Business Management (BA)',
  'Information Technology (BSc)',
  'Accounting & Finance (BA)',
  'Pharmacy Technology (TVET)',
  'Medical Laboratory (TVET)',
  'Nursing Assistant (TVET)',
  'IT Support & Networking (TVET)',
  'Extension – Business Management',
  'Extension – Health Sciences',
  'Distance Learning – IT',
]

export default function RegistrationModal({ onClose }) {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', gender: '', city: '',
    program: '', studyMode: '', intake: '',
    notes: '',
    agreedToTerms: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' })
  }

  const validateStep = () => {
    const newErrors = {}
    if (step === 0) {
      if (!form.firstName.trim()) newErrors.firstName = 'Required'
      if (!form.lastName.trim()) newErrors.lastName = 'Required'
      if (!form.email.trim()) newErrors.email = 'Required'
      else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid'
      if (!form.phone.trim()) newErrors.phone = 'Required'
      if (!form.gender) newErrors.gender = 'Required'
    }
    if (step === 1) {
      if (!form.program) newErrors.program = 'Required'
      if (!form.studyMode) newErrors.studyMode = 'Required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => { if (validateStep()) setStep((s) => Math.min(s + 1, t.modal.steps.length - 1)) }
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2540] px-8 py-6 text-white shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <X size={18} />
          </button>
          <h2 className="text-2xl font-bold font-display">{t.modal.title}</h2>
          <p className="text-white/60 text-sm mt-1">{t.modal.subtitle}</p>

          {!submitted && (
            <div className="flex items-center gap-2 mt-5">
              {t.modal.steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all ${i < step ? 'bg-green-400 text-white' : i === step ? 'bg-yellow-400 text-[#1a3a5c]' : 'bg-white/15 text-white/50'}`}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs hidden sm:block ${i === step ? 'text-yellow-400 font-semibold' : 'text-white/40'}`}>{s}</span>
                  {i < t.modal.steps.length - 1 && <div className="w-6 h-0.5 bg-white/20" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 py-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle2 className="text-green-500" size={44} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a5c] font-display mb-2">{t.modal.successTitle}</h3>
              <p className="text-gray-500 max-w-sm" dangerouslySetInnerHTML={{
                __html: t.modal.successText
                  .replace('{{name}}', `<strong>${form.firstName}</strong>`)
                  .replace('{{program}}', `<strong>${form.program}</strong>`)
                  .replace('{{email}}', `<strong>${form.email}</strong>`)
              }} />
              <div className="mt-6 bg-blue-50 rounded-xl p-4 text-sm text-left w-full max-w-xs">
                <div className="font-semibold text-[#1a3a5c] mb-2">{t.modal.nextSteps}</div>
                <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                  {t.modal.nextStepItems.map(item => <li key={item}>{item}</li>)}
                </ol>
              </div>
              <button onClick={onClose} className="mt-6 btn-primary text-white px-8 py-3 rounded-full font-semibold">
                {t.modal.close}
              </button>
            </div>
          ) : (
            <>
              {/* Step 0: Personal Info */}
              {step === 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1a3a5c] text-base mb-4 flex items-center gap-2">
                    <User size={18} className="text-[#c0392b]" /> {t.modal.personalTitle}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.firstName} <span className="text-red-500">*</span></label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder={t.modal.fields.firstNamePH}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.lastName} <span className="text-red-500">*</span></label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder={t.modal.fields.lastNamePH}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.email} <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t.modal.fields.emailPH}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.phone} <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t.modal.fields.phonePH}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.gender} <span className="text-red-500">*</span></label>
                      <select name="gender" value={form.gender} onChange={handleChange}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all bg-white ${errors.gender ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`}>
                        <option value="">{t.modal.fields.genderPH}</option>
                        {t.modal.fields.genderOptions.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.dob}</label>
                      <input type="date" name="dob" value={form.dob} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.city}</label>
                      <input name="city" value={form.city} onChange={handleChange} placeholder={t.modal.fields.cityPH}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c] transition-all" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Program Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1a3a5c] text-base mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-[#c0392b]" /> {t.modal.programTitle}
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.program} <span className="text-red-500">*</span></label>
                    <select name="program" value={form.program} onChange={handleChange}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all bg-white ${errors.program ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c]'}`}>
                      <option value="">{t.modal.fields.programPH}</option>
                      <optgroup label={t.modal.programGroups.degree}>
                        {programsList.filter(p => p.includes('BSc') || p.includes('BA')).map(p => <option key={p}>{p}</option>)}
                      </optgroup>
                      <optgroup label={t.modal.programGroups.tvet}>
                        {programsList.filter(p => p.includes('TVET')).map(p => <option key={p}>{p}</option>)}
                      </optgroup>
                      <optgroup label={t.modal.programGroups.extension}>
                        {programsList.filter(p => p.includes('Extension') || p.includes('Distance')).map(p => <option key={p}>{p}</option>)}
                      </optgroup>
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.studyMode} <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 gap-3">
                      {t.modal.studyModes.map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => { setForm({ ...form, studyMode: mode }); setErrors({ ...errors, studyMode: '' }) }}
                          className={`border rounded-xl p-3 text-sm text-left transition-all ${form.studyMode === mode ? 'border-[#1a3a5c] bg-[#1a3a5c]/5 text-[#1a3a5c] font-semibold' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                        >
                          <Clock size={14} className="mb-1 opacity-60" />
                          {mode}
                        </button>
                      ))}
                    </div>
                    {errors.studyMode && <p className="text-red-500 text-xs mt-1">{errors.studyMode}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.intake}</label>
                    <select name="intake" value={form.intake} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c] transition-all bg-white">
                      <option value="">{t.modal.fields.intakePH}</option>
                      {t.modal.fields.intakeOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.modal.fields.notes}</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                      placeholder={t.modal.fields.notesPH}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1a3a5c]/20 focus:border-[#1a3a5c] transition-all resize-none" />
                  </div>
                </div>
              )}

              {/* Step 2: Documents */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1a3a5c] text-base mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-[#c0392b]" /> {t.modal.docsTitle}
                  </h3>
                  <p className="text-gray-500 text-sm">{t.modal.docsPara}</p>
                  {t.modal.docSections.map((section) => (
                    <div key={section.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h4 className="font-semibold text-[#1a3a5c] text-sm mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 border-2 border-dashed border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-[#1a3a5c]/40 hover:bg-blue-50/50 transition-colors">
                        <p className="text-xs text-gray-400">{t.modal.uploadHint}</p>
                        <p className="text-xs text-gray-300 mt-0.5">{t.modal.uploadSub}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 mt-2">
                    <input type="checkbox" id="terms" name="agreedToTerms" checked={form.agreedToTerms} onChange={handleChange}
                      className="mt-1 accent-[#1a3a5c]" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      {t.modal.fields.terms} <span className="text-[#1a3a5c] font-semibold cursor-pointer hover:underline">{t.modal.fields.termsLink}</span> {t.modal.fields.termsEnd}
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-[#1a3a5c] text-base mb-4">{t.modal.reviewTitle}</h3>
                  <div className="space-y-3">
                    {[
                      { label: t.modal.reviewLabels[0], value: `${form.firstName} ${form.lastName}` },
                      { label: t.modal.reviewLabels[1], value: form.email },
                      { label: t.modal.reviewLabels[2], value: form.phone },
                      { label: t.modal.reviewLabels[3], value: form.gender || t.modal.notProvided },
                      { label: t.modal.reviewLabels[4], value: form.dob || t.modal.notProvided },
                      { label: t.modal.reviewLabels[5], value: form.city || t.modal.notProvided },
                      { label: t.modal.reviewLabels[6], value: form.program || '—' },
                      { label: t.modal.reviewLabels[7], value: form.studyMode || '—' },
                      { label: t.modal.reviewLabels[8], value: form.intake || t.modal.notSpecified },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-start py-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm">{label}</span>
                        <span className="text-[#1a3a5c] font-medium text-sm text-right max-w-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                  {!form.agreedToTerms && (
                    <p className="text-amber-600 text-xs bg-amber-50 p-3 rounded-lg">{t.modal.warningTerms}</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer buttons */}
        {!submitted && (
          <div className="shrink-0 px-8 py-5 border-t border-gray-100 flex justify-between items-center bg-gray-50">
            <button
              onClick={step === 0 ? onClose : prevStep}
              className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-100 transition-colors font-medium"
            >
              {step === 0 ? t.modal.cancel : t.modal.back}
            </button>

            {step < t.modal.steps.length - 1 ? (
              <button onClick={nextStep} className="btn-primary text-white px-8 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                {t.modal.next} <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!form.agreedToTerms || loading}
                className="btn-primary text-white px-8 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />{t.modal.submitting}</>
                ) : (
                  t.modal.submit
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
