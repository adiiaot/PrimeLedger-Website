import Navbar from '@/components/Navbar'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">How we handle your data</p>
        </div>
        <div className="card space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <p>PrimeLedger is a demo/portfolio project. No real user data is collected or stored.</p>
          <p>Any information entered in the demo is stored locally in your browser and is not transmitted to any server.</p>
          <p>We do not use cookies for tracking purposes. Local storage is used only for theme and currency preferences.</p>
          <p>This is a simulated environment and should not be used with real personal or financial information.</p>
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.
      </footer>
    </main>
  )
}
