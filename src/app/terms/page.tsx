import Navbar from '@/components/Navbar'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400">Terms and conditions</p>
        </div>
        <div className="card space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <p>This is a demo/portfolio project. No real transactions occur on this platform.</p>
          <p>All data shown is simulated for demonstration purposes only.</p>
          <p>PrimeLedger is a showcase project demonstrating full-stack fintech architecture.</p>
          <p>By using this demo, you agree that this is a simulated environment.</p>
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.
      </footer>
    </main>
  )
}
