import { useState } from 'react'
import { BookOpen, Search, Laptop, Users, ExternalLink, Lock, Download, FileText, X, CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n'

const featuresIcons = [Laptop, BookOpen, Search, Users]

export default function DigitalLibrary() {
  const { t } = useLang()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [downloadingFile, setDownloadingFile] = useState(null)

  // Mock login handler
  const handleLogin = (e) => {
    e.preventDefault()
    // Accept any credentials for mock purposes
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  // Mock download handler
  const handleDownload = (fileName) => {
    setDownloadingFile(fileName)
    setTimeout(() => {
      setDownloadingFile(null)
      alert(`Download started for: ${fileName}`)
    }, 1500)
  }

  const mockDepartments = [
    { name: 'Health Sciences', file: 'Health_Materials_2025.zip', size: '45 MB' },
    { name: 'Business & Finance', file: 'Business_Case_Studies.zip', size: '32 MB' },
    { name: 'Information Technology', file: 'IT_Lab_Resources.zip', size: '128 MB' },
    { name: 'General Academics', file: 'General_Study_Guide.pdf', size: '5 MB' },
  ]

  return (
    <section id="library" className="py-20 px-6 bg-[#0f2540] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">{t.library.tag}</span>
            <h2 className="text-4xl font-bold mt-2 font-display">{t.library.heading}</h2>
            <p className="text-white/70 mt-4 text-lg leading-relaxed max-w-lg">
              {t.library.subheading}
            </p>
            
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-lg">{t.library.featuresTitle}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.library.features.map((feature, i) => {
                  const Icon = featuresIcons[i]
                  return (
                    <div key={feature} className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-yellow-400">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {!isLoggedIn ? (
              <button 
                onClick={() => setShowLoginModal(true)}
                className="mt-10 btn-primary text-[#1a3a5c] bg-yellow-400 hover:bg-yellow-300 px-8 py-3.5 rounded-full text-sm font-semibold shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
              >
                {t.library.accessBtn} <Lock size={16} />
              </button>
            ) : (
              <div className="mt-10 flex items-center gap-3 text-green-400 font-semibold bg-green-400/10 inline-flex px-5 py-3 rounded-xl border border-green-400/20">
                <CheckCircle2 size={20} />
                Successfully logged in as Student
              </div>
            )}
          </div>
          
          <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a3a5c] to-[#0a1e36] border border-white/10 flex items-center justify-center shadow-2xl">
             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-10 mix-blend-overlay"></div>
             
             {/* Mock library interface */}
             <div className="w-[85%] max-w-md bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl relative z-10 h-[80%] flex flex-col">
               <div className="flex items-center gap-3 mb-6 shrink-0">
                 <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400"><BookOpen size={20} /></div>
                 <div>
                   <div className="text-white font-bold text-sm">Addinas E-Library</div>
                   <div className="text-white/50 text-xs">{isLoggedIn ? 'Department Resources' : 'Student Portal'}</div>
                 </div>
               </div>
               
               {!isLoggedIn ? (
                 <div className="flex-1 flex flex-col items-center justify-center text-center">
                   <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/40 mb-4 border border-white/10">
                     <Lock size={28} />
                   </div>
                   <h4 className="text-white font-bold mb-2">Restricted Access</h4>
                   <p className="text-white/50 text-sm px-4">Please log in using your college username and password to download resources.</p>
                 </div>
               ) : (
                 <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                   {mockDepartments.map((dept, i) => (
                     <div key={i} className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl p-4">
                       <h4 className="text-white/90 font-semibold text-sm mb-1">{dept.name}</h4>
                       <div className="flex items-center justify-between mt-3">
                         <div className="flex items-center gap-2 text-white/50 text-xs">
                           <FileText size={14} />
                           <span>{dept.file}</span>
                           <span className="opacity-50">({dept.size})</span>
                         </div>
                         <button 
                           onClick={() => handleDownload(dept.file)}
                           disabled={downloadingFile === dept.file}
                           className="w-8 h-8 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 flex items-center justify-center transition-colors disabled:opacity-50"
                           title="Download ZIP"
                         >
                           {downloadingFile === dept.file ? <span className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" /> : <Download size={14} />}
                         </button>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a1e36]/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative text-gray-800 animate-fade-up">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a3a5c] flex items-center justify-center mb-6 border border-blue-100">
                <Lock size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a5c] mb-2 font-display">Student Login</h3>
              <p className="text-gray-500 text-sm mb-6">Enter your Addinas College credentials to access downloadable study materials and department ZIP files.</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">College Username / ID</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. AD/1234/15"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                  <input 
                    type="password" 
                    required
                    placeholder="Enter password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10 transition-all"
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary bg-[#1a3a5c] hover:bg-[#0f2540] text-white py-3.5 rounded-xl font-semibold mt-4 flex items-center justify-center gap-2 transition-colors">
                  <Lock size={16} /> Secure Login
                </button>
              </form>
              
              <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-100 pt-4">
                For demo purposes, any username/password will work.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
