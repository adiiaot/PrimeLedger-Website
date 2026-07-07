# PrimeLedger — Advanced Earning Platform

A full-stack fintech + crypto earning platform demo. Features a simulated investment ecosystem with tiered plans, daily rewards, crypto deposits, referral tracking, and a complete admin dashboard.

**Live Demo:** [https://prime-ledger-website.vercel.app/](https://prime-ledger-website.vercel.app/)

> ⚡ No signup required — click "View Live Demo" for instant access to a fully populated dashboard.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| State | React Context (Auth, Theme, Wallet) |
| Data | Client-side mock data (zero database) |
| Icons | React Icons + Heroicons |
| Deployment | Vercel (static export ready) |

---

## Features

### User Dashboard
- **Wallet Balance** — Persistent balance via `localStorage` across page refreshes
- **Daily Rewards** — Claim $30 daily, build streaks for bonuses
- **Quick Actions** — Deposit, withdraw, and refer from one screen
- **Active Investments** — Real-time progress tracking per plan
- **Recent Activity** — Transaction history feed

### Deposit System
- **Freeform Amount** — Enter any USD amount (min $10)
- **6 Cryptocurrencies** — Bitcoin, Ethereum, USDT (TRC20), BNB (BEP20), Dogecoin, Litecoin
- **Wallet Address Display** — Copy-to-clipboard with warning labels
- **Processing Simulation** — 4-second "blockchain confirmation" animation before credit

### Investment Plans
- **6 Tiers** — Starter ($10) to Premium ($1,000,000)
- **Profit Rates** — 5% to 50% per plan
- **Duration** — 3 to 45 days
- **Referral Bonuses** — 5% to 30% per plan

### Referral Program
- **Unique Referral Link** — Share and track referrals
- **$50 Per Active Referral** — Bonus credited on signup
- **Referral Status** — Active/inactive tracking with join dates

### Withdrawal System
- **Request Flow** — Amount input + method selection + submission
- **History** — Status tracking (pending/completed/cancelled)
- **Admin Approval** — Simulated approve/reject workflow

### Admin Panel
- **Dashboard** — Stats (users, deposits, withdrawals, active investments)
- **Users** — Table with plan, status, deposit amounts
- **Payments** — Approval/rejection with summary cards
- **Investments** — Progress bars, status tracking
- **Withdrawals** — Approve/reject actions inline
- **Plans** — Price cards with daily reward and duration
- **Settings** — Bank details management
- **Tickets** — Support ticket management
- **Changelog** — Version history with active badges

### Static Pages
- **FAQ** — Accordion with 8 questions
- **User Guide** — Numbered walkthrough per feature
- **Terms of Service** — Demo/project disclaimers
- **Privacy Policy** — Data handling transparency

---

## Architecture

```
src/
├── app/              # Next.js App Router (22 pages + 13 API routes)
│   ├── admin/        # Admin dashboard (9 pages)
│   ├── dashboard/    # User dashboard (8 pages)
│   ├── faq/          # Static pages
│   ├── guide/
│   ├── terms/
│   ├── privacy-policy/
│   ├── login/        # Auth pages
│   ├── register/
│   └── api/          # Mock API endpoints
├── components/       # Navbar, Sidebar, Logo, PlanBadge, Skeleton
├── context/          # AuthContext, ThemeContext, WalletContext
└── lib/
    ├── constants.ts  # App config, crypto addresses, plan data
    └── mock-data.ts  # All demo data (user, investments, transactions)
```

---

## Key Design Decisions

### 1. Mock-Data-Only Architecture
No database, no real API, no server state. All data lives in `mock-data.ts` and serves the entire application. This means zero deployment dependencies — the site can be fully static if needed.

### 2. WalletContext for Persistence
A React context wraps the dashboard and persists the wallet balance to `localStorage`. Deposits and daily claims update this context in real-time, and the balance survives page refreshes.

### 3. Solid Gold Design System
Clean professional gold-accented UI — no gradients, no glassmorphism. Light mode uses white cards on subtle backgrounds; dark mode uses deep slate. Font stack is Inter (300-900 weight).

### 4. Simulation-First UX
Every interactive flow (deposit confirmation, withdrawal approval, daily claiming) includes realistic timing and visual feedback — toasts, spinners, progress bars — making the demo feel like a real application.

---

## Running Locally

```bash
git clone https://github.com/adiiaot/PrimeLedger-Website.git
cd PrimeLedger-Website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No database, no `.env`, no setup required.

---

## Deployment

The project is Vercel-ready with zero configuration:

```bash
npm run build  # Produces optimized output
```

Connect your GitHub repo to Vercel — it will detect Next.js automatically and build with the correct settings.

---

## About

Built by **AOT AYO** as a portfolio showcase demonstrating full-stack fintech architecture.

- **Portfolio:** [https://aot-network-portfolio.vercel.app/](https://aot-network-portfolio.vercel.app/)
- **Email:** aotayom34@gmail.com
- **Live Demo:** [https://prime-ledger-website.vercel.app/](https://prime-ledger-website.vercel.app/)
