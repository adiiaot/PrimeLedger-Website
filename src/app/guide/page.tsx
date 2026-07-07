import Navbar from '@/components/Navbar'

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">User Guide</h1>
          <p className="text-slate-500 dark:text-slate-400">How to use PrimeLedger</p>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Getting Started</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-500 dark:text-slate-400 text-sm">
              <li>Click &quot;View Live Demo&quot; to instantly access the dashboard</li>
              <li>Explore the pre-populated demo data across all features</li>
              <li>Switch currency preference (USD/NGN/USDT/SOL/BTC/ETH)</li>
              <li>Toggle between light and dark mode</li>
            </ol>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Investment Plans</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Choose from Starter ($30), Growth ($50), or Premium ($100) plans. Each plan offers different earning potential and withdrawal minimums.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Daily Tasks</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Claim your daily reward each day. Build streaks for bonus rewards. Only active plan holders can claim.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Payment Methods</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Bank transfer and crypto (USDT, BTC, ETH, SOL) payments are supported. Crypto payments use dummy wallet addresses for demo.</p>
          </div>
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.
      </footer>
    </main>
  )
}
