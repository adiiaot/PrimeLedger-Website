'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import { useAuth } from '@/context/AuthContext'
import { DAILY_TASK_REWARD } from '@/lib/constants'
import { HiShieldCheck, HiChartBar, HiCash } from 'react-icons/hi'
import { FaCoins, FaRocket, FaHandshake, FaChartLine, FaUserCheck, FaStar, FaArrowRight } from 'react-icons/fa'

const features = [
  { icon: <HiShieldCheck size={24} />, title: 'Secure Platform', desc: 'Enterprise-grade security to protect your deposits and personal data.' },
  { icon: <FaChartLine size={24} />, title: 'Competitive Returns', desc: 'Earn attractive returns on your deposits with our carefully designed plans.' },
  { icon: <FaUserCheck size={24} />, title: 'Easy Deposit', desc: 'Start depositing in minutes. Fund your account and start earning.' },
  { icon: <FaRocket size={24} />, title: 'Daily Earnings', desc: 'Earn ${DAILY_TASK_REWARD} every day by completing simple daily tasks on the platform.' },
  { icon: <FaHandshake size={24} />, title: '24/7 Support', desc: 'Our dedicated support team is always ready to help you succeed.' },
  { icon: <FaStar size={24} />, title: 'Premium Experience', desc: 'Premium fintech platform designed for the modern investor.' },
]

const steps = [
  { num: '01', icon: <FaCoins size={20} />, title: 'Fund Your Account', desc: 'Deposit via crypto to start your journey.' },
  { num: '02', icon: <HiChartBar size={20} />, title: 'Invest in a Plan', desc: 'Choose a plan that suits your goals and start earning daily.' },
  { num: '03', icon: <FaRocket size={20} />, title: 'Earn & Withdraw', desc: 'Complete daily tasks, earn rewards, and withdraw your profits.' },
]

const plans = [
  { name: 'Starter Plan', amount: 100, key: 'starter', desc: 'Perfect for beginners.' },
  { name: 'Growth Plan', amount: 500, key: 'growth', desc: 'Most popular plan.' },
  { name: 'Premium Plan', amount: 1000, key: 'premium', desc: 'Maximum potential.' },
]

export default function HomePage() {
  const { user } = useAuth()
  const [visible, setVisible] = useState<number[]>([])
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(idx)) setVisible(prev => Array.from(new Set([...prev, idx])))
          }
        })
      }, { threshold: 0.1 }
    )
    sectionsRef.current.forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const setRef = (idx: number) => (el: HTMLElement | null) => { sectionsRef.current[idx] = el }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gold-500/10 rounded-full border border-gold-200 dark:border-gold-800">
                <span className="w-2 h-2 bg-gold-500 rounded-full" />
                <span className="text-gold-700 dark:text-gold-300 text-xs sm:text-sm font-semibold">PrimeLedger — Advanced Earning Platform</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                Invest Smart,{' '}
                <span className="text-gold-500">Earn Daily</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
                Join PrimeLedger and start earning daily rewards on your deposit. Fund your account, choose a plan, and grow your balance.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href={user ? '/dashboard' : '/login'}>
                  <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold">
                    {user ? 'Go to Dashboard' : 'View Live Demo'}
                  </button>
                </Link>
                <Link href="/#plans">
                  <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold">
                    View Plans
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-6 sm:gap-8 pt-2 sm:pt-4">
                <div><span className="text-gold-600 dark:text-gold-400 font-extrabold text-xl sm:text-2xl">$100</span><p className="text-slate-400 text-xs sm:text-sm font-medium">Starting Plan</p></div>
                <div><span className="text-gold-600 dark:text-gold-400 font-extrabold text-xl sm:text-2xl">$30</span><p className="text-slate-400 text-xs sm:text-sm font-medium">Daily Earnings</p></div>
                <div><span className="text-gold-600 dark:text-gold-400 font-extrabold text-xl sm:text-2xl">24/7</span><p className="text-slate-400 text-xs sm:text-sm font-medium">Support</p></div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gold-500/10 blur-3xl absolute" />
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full border-2 border-gold-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FaChartLine size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Start Investing</h3>
                  <p className="text-gold-600 dark:text-gold-400 font-semibold">Earn Daily Rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" ref={setRef(1)} data-index={1} className={`py-16 sm:py-24 transition-all duration-700 ${visible.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">About PrimeLedger</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                The <span className="text-gold-500">Future</span> of Smart Earning
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
                PrimeLedger is an earnings platform that connects members with curated opportunities. We provide a seamless experience for users to earn daily rewards.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">PrimeLedger is a premium fintech platform built for modern investors. We are committed to transparency, security, and delivering value.</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Trusted Earnings Platform</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">We are committed to transparency, security, and delivering value to every user who joins us on this journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" ref={setRef(2)} data-index={2} className={`py-16 sm:py-24 bg-white/50 dark:bg-slate-900/50 transition-all duration-700 ${visible.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Investment Plans</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Choose Your <span className="text-gold-500">Investment Plan</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Select from our carefully designed investment plans and start earning daily rewards.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <div key={plan.key} className="card text-center relative">
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-white text-xs font-bold rounded-full ${i === 1 ? '' : 'opacity-0'}`}>
                  Most Popular
                </div>
                <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
                  <FaCoins size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold-500 mb-2">${plan.amount}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">{plan.desc}</p>
                <Link href="/login">
                  <button className="btn-primary w-full text-center text-sm sm:text-base">Invest Now</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" ref={setRef(3)} data-index={3} className={`py-16 sm:py-24 transition-all duration-700 ${visible.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Start Investing in <span className="text-gold-500">3 Simple Steps</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Getting started with PrimeLedger is easy. Follow these simple steps.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="card text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">{step.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={setRef(4)} data-index={4} className={`py-16 sm:py-24 bg-white/50 dark:bg-slate-900/50 transition-all duration-700 ${visible.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Why PrimeLedger</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Built for <span className="text-gold-500">Investors</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Premium technology meets carefully designed plans for a great earning experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white">{f.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Start Investing?</h2>
              <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">Start your investment journey today and earn daily rewards.</p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/login"><button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gold-700 font-bold rounded-xl text-sm sm:text-lg hover:bg-slate-50 transition shadow-lg">View Live Demo</button></Link>
                <a href="https://t.me/PrimeLedgerHelp" target="_blank" rel="noopener noreferrer"><button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/50 text-white font-semibold rounded-xl text-sm sm:text-lg hover:bg-white/10 transition">Contact on Telegram</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div><Logo /><p className="text-slate-500 text-sm mt-2">A new way to invest and grow your wealth.</p></div>
            <div><h4 className="text-slate-900 dark:text-white font-bold mb-4 text-sm">Quick Links</h4>
              <div className="space-y-2 text-slate-500 text-sm">
                <Link href="/#about" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">About</Link>
                <Link href="/#plans" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">Plans</Link>
                <Link href="/#how-it-works" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">How It Works</Link>
                <Link href="/faq" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">FAQ</Link>
              </div>
            </div>
            <div><h4 className="text-slate-900 dark:text-white font-bold mb-4 text-sm">Support</h4>
              <div className="space-y-2 text-slate-500 text-sm">
                <a href="https://t.me/PrimeLedgerHelp" target="_blank" rel="noopener noreferrer" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">@PrimeLedgerHelp</a>
                <p>Send payment receipt to receive your activation code.</p>
              </div>
            </div>
            <div><h4 className="text-slate-900 dark:text-white font-bold mb-4 text-sm">Legal</h4>
              <div className="space-y-2 text-slate-500 text-sm">
                <Link href="/terms" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">Terms</Link>
                <Link href="/privacy-policy" className="block hover:text-gold-600 dark:hover:text-gold-400 font-medium">Privacy</Link>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm pt-8 border-t border-slate-200 dark:border-white/5">&copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.</div>
        </div>
      </footer>
    </main>
  )
}
