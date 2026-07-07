# PrimeLedger — Advanced Earning Platform

A full-stack fintech + crypto earning platform demonstrating complex system architecture, payment flows, user management, and admin analytics.

Built with **Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL**.

## Demo

This is a fully working demo. Click **"View Live Demo"** on the homepage to instantly access a populated dashboard — no signup required.

## Key Features

| Feature | Description |
|---------|-------------|
| Multi-tier plans | Starter, Growth, Premium with increasing benefits |
| Daily tasks | Claim rewards daily, build streaks for bonuses |
| Referrals | Invite users, earn per-plan referral rewards |
| Withdrawals | Tue/Fri only, per-plan minimum thresholds |
| Admin dashboard | Stats, payment approval, user management |
| Support tickets | In-app feedback with admin response |
| Dark/Light mode | Dual theme support with gradient UI |
| Multi-currency | USD, NGN, USDT, SOL, BTC, ETH with live conversion |
| Crypto payments | USDT/BTC/ETH/SOL alongside bank transfers |

## Currency System

Users can switch between 6 currencies:
- **Fiat:** USD (base), NGN
- **Crypto:** USDT (pegged to USD), SOL, BTC, ETH

All prices are stored in USD base and converted in real-time based on the user's preference.

## Architecture

```
src/
├── app/          # Next.js App Router (pages + API routes)
├── components/   # Reusable UI components
├── context/      # Auth, Theme, Currency providers
├── lib/
│   ├── mock-data.ts  # Demo data layer
│   └── constants.ts  # Config, currency system, plan data
└── middleware.ts # Route protection
```

## Running Locally

```bash
git clone https://github.com/YOUR_USERNAME/primeledger.git
cd primeledger
npm install
npm run dev
```

No database setup needed — the demo runs entirely on mock data.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **State:** React Context (Auth, Theme, Currency)
- **Deployment:** Vercel-ready

## Contact

Built by **[Your Name]** — [your-portfolio-link] — [your-email]
