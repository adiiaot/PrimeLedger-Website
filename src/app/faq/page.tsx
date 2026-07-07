import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'

const faqs = [
  { q: 'What is PrimeLedger?', a: 'PrimeLedger is a premium fintech + crypto earning platform that allows users to invest in tiered plans and earn daily rewards through tasks and referrals.' },
  { q: 'How do I get started?', a: 'Click "View Live Demo" to explore the platform instantly with pre-populated demo data. No signup required.' },
  { q: 'What payment methods are accepted?', a: 'We accept bank transfers and crypto (USDT, BTC, ETH, SOL).' },
  { q: 'When can I withdraw?', a: 'Withdrawals are processed on Tuesdays and Fridays. Minimum withdrawal amounts vary by plan.' },
  { q: 'How does the referral system work?', a: 'Share your unique referral link. When someone signs up using your link, you earn a referral reward based on their chosen plan.' },
  { q: 'Is my money safe?', a: 'PrimeLedger uses industry-standard security practices. This demo version is a simulated environment for portfolio showcase.' },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">FAQ</h1>
          <p className="text-slate-500 dark:text-slate-400">Frequently asked questions</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.
      </footer>
    </main>
  )
}
