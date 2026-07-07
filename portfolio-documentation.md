# PrimeLedger — Portfolio Project Documentation

> **Live Demo:** [https://prime-ledger-website.vercel.app/](https://prime-ledger-website.vercel.app/)
>
> **GitHub:** [https://github.com/adiiaot/PrimeLedger-Website](https://github.com/adiiaot/PrimeLedger-Website)
>
> **Stack:** Next.js 14 · TypeScript · Tailwind CSS v3 · React Context · Mock Data

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [System Architecture](#2-system-architecture)
3. [Features Breakdown](#3-features-breakdown)
4. [User Flow](#4-user-flow)
5. [Design System](#5-design-system)
6. [Key Technical Decisions](#6-key-technical-decisions)
7. [Pages & Routes](#7-pages--routes)
8. [What This Demonstrates](#8-what-this-demonstrates)
9. [Development Timeline](#9-development-timeline)

---

## 1. Project Overview

PrimeLedger is a fully functional fintech + crypto earning platform demo. It simulates a complete investment ecosystem where users can deposit funds via cryptocurrency, invest in tiered plans, earn daily rewards, track referrals, request withdrawals, and manage their profile — all within a polished, responsive UI.

**Why this project exists:** This is a public demo version of a private production fintech platform I built for a client. That system handles real users and real transactions and is confidential. I rebuilt PrimeLedger from scratch as a public showcase to demonstrate the same architecture, features, and engineering decisions without exposing any client's business.

**What makes it unique:**
- Zero database — everything runs on client-side mock data for instant deployment
- 6 cryptocurrency payment options with realistic processing simulation
- Persistent wallet state across page refreshes via React Context + localStorage
- Complete admin panel with user/payment/withdrawal management
- Dark/light mode with a professional gold-accented design system

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Next.js 14 App Router                   │
├──────────────┬──────────────────┬────────────────────────┤
│  Public Pages│  Dashboard Pages │  Admin Pages            │
│  (6)         │  (8)             │  (9)                    │
├──────────────┴──────────────────┴────────────────────────┤
│                   React Context Layer                      │
│  AuthContext  │  ThemeContext   │  WalletContext           │
├──────────────────────────────────────────────────────────┤
│                   Data Layer                               │
│  constants.ts (config, addresses, plans)                  │
│  mock-data.ts (users, investments, transactions)          │
├──────────────────────────────────────────────────────────┤
│                   UI Layer                                 │
│  Tailwind CSS  │  React Icons  │  react-hot-toast         │
└──────────────────────────────────────────────────────────┘
```

### Data Flow

All data flows through a single mock-data layer:

1. **constants.ts** — App name, crypto wallet addresses, plan definitions, reward amounts
2. **mock-data.ts** — Demo user profile, investments, transactions, withdrawals, tickets, dashboard stats
3. **AuthContext** — Manages demo user session (stored in localStorage + cookie)
4. **WalletContext** — Persists wallet balance to localStorage, exposes `addBalance()` / `deductBalance()`
5. **Components** — Read from contexts and render UI. User actions update contexts, which re-render the tree.

No network requests hit a real server. The 13 API routes exist as placeholders returning mock JSON — they are not required for the app to function.

---

## 3. Features Breakdown

### Dashboard (`/dashboard`)
| Feature | Details |
|---------|---------|
| Wallet Balance | Shows current balance from WalletContext, persists on refresh |
| Total Earnings | Simulated lifetime earnings ($270 demo) |
| Referral Count | Number of successful referrals |
| Pending Withdrawals | Outstanding withdrawal amount |
| Daily Task | Claim $30 reward once per day, shows streak count |
| Quick Actions | Links to Deposit, Withdraw, Refer & Earn |
| Active Investments | Running plans with progress bars (earnings/redeem threshold) |
| Recent Activity | Last 5 transactions with type indicators |

### Deposit (`/dashboard/deposit`)
- Freeform USD amount input (minimum $10)
- 6 cryptocurrency options: Bitcoin, Ethereum, USDT (TRC20), BNB (BEP20), Dogecoin, Litecoin
- Each option shows its own wallet address with one-click copy
- Warning labels per asset ("Send only BTC to this address")
- Processing simulation: button click → spinner + "Confirming Transaction..." → 4s delay → success toast → wallet credited
- Post-deposit success screen with amount and link back to dashboard

### Membership (`/dashboard/membership`)
- 6 investment tiers: Starter ($10–$799), Basic ($800–$4,999), Pro ($5,000–$24,999), Elite ($25,000–$99,999), Mega ($100,000–$499,999), Premium ($500,000–$1,000,000)
- Each card shows: deposit range, profit rate (5%–50%), duration (3–45 days), referral bonus
- "Invest Now" button links to deposit page

### Activity (`/dashboard/activity`)
- Full transaction history with credit/debit indicators
- Filter by All / Credits / Debits
- Each entry shows: type icon, description, date, amount with +/- sign
- Color-coded: green for credits, red for debits

### Referrals (`/dashboard/referrals`)
- Unique referral link with one-click copy
- Referral bonus: $50 per active referral
- Referral list with name, join date, bonus amount, active/inactive status

### Withdrawals (`/dashboard/withdrawals`)
- Amount input (minimum $20)
- Method selection (BTC, ETH, USDT, BNB)
- History table with: ID, date, method, amount, status
- Status badges: completed (green), pending (amber), cancelled (red)

### Profile (`/dashboard/profile`)
- User avatar with initials on gold background
- Editable: full name, email, phone
- "Save Changes" with success toast
- Member since date

### Support (`/dashboard/support`)
- FAQ accordion with 4 common questions
- Contact form with textarea and send button
- Success toast on submission

### Admin Dashboard (`/admin`)
| Page | Contents |
|------|----------|
| Home | 4 stat cards (users, investments, deposits, pending), recent activity feed, platform overview |
| Users | Table with name, email, plan, deposits, status badges |
| Payments | Summary cards (approved/pending totals), table with reference, user, plan, amount, status |
| Investments | Table with plan, principal, status, progress bar with percentage |
| Withdrawals | Table with user, amount, bank, status + inline Approve/Reject buttons |
| Plans | 3 plan cards (Starter, Growth, Premium) with price, daily reward, duration |
| Settings | Bank details form (bank name, account name, number) |
| Tickets | Support tickets with category, subject, message, open/closed status |
| Changelog | Version history with active/release badges |

### Static Pages
- **FAQ** — 8 questions in accordion format with expand/collapse animation
- **User Guide** — 6 sections with numbered steps per feature area
- **Terms of Service** — Demo project disclaimers in card sections with icons
- **Privacy Policy** — Data handling policy with 5 sections (no collection, local storage, cookies, third-party, user control)

### Home Page (`/`)
- Hero section with CTA, stats (starting plan, daily earnings, 24/7 support)
- About section
- Plans section (3 cards: Starter $30, Growth $50, Premium $100)
- How It Works (3 steps)
- Features grid (6 items)
- CTA banner
- Footer with links, logo, copyright

---

## 4. User Flow

```
Home Page
    │
    ├──► "View Live Demo" / "Get Started"
    │       │
    │       ▼
    │   Login Page
    │       │
    │       ├──► "Enter Demo Mode" (one click)
    │       │       │
    │       │       ▼
    │       │   Dashboard (auto-login, $450 balance)
    │       │
    │       └──► Fill form → "Sign In" → same demo mode
    │
    ├──► "View Plans"
    │       │
    │       ▼
    │   Plans Section → "Invest Now" → Login → Deposit
    │
    └──► Navbar links (About, Plans, How It Works, FAQ)
    
Dashboard Flow:
    Dashboard → Deposit → Select Crypto → Send to Address → Confirm → Wallet Credited
    Dashboard → Withdraw → Enter Amount → Select Method → Submit → Added to History
    Dashboard → Claim Daily Reward → Balance Updates
    Dashboard → Referrals → Copy Link → Track Referrals
    Dashboard → Activity → Filter Transactions
    Dashboard → Profile → Edit Details → Save
    Dashboard → Support → Read FAQ → Send Message
    Dashboard → Membership → Browse Plans → Invest Now
```

---

## 5. Design System

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Page Background | `radial-gradient(white → #fefce8 → #fffbeb)` | `radial-gradient(#020617 → #0f172a → #1a1200)` |
| Card Background | `white` with `shadow-sm` | `slate-800/80` with `ring-1 ring-white/5` |
| Text Primary | `slate-900` | `white` |
| Text Muted | `slate-500` | `slate-400` |
| Accent (Gold) | `gold-500` (`#EAB308`) | `gold-400` |
| Success | `emerald-600` | `emerald-400` |
| Warning | `amber-600` | `amber-400` |
| Error | `red-500` | `red-400` |

### Typography
- **Font:** Inter (Google Fonts, weights 300–900)
- **Headings:** `font-extrabold` with `tracking-tight`
- **Body:** `font-medium` / `font-semibold`
- **Monospace:** `font-mono` for codes and addresses

### Component Styles
- **Buttons:** Solid `bg-gold-500` with `hover:bg-gold-600` — no gradients
- **Cards:** White background, `rounded-xl`, `p-6`, subtle hover elevation
- **Badges:** Solid color backgrounds (`bg-gold-500/10`, `bg-emerald-500/10`, etc.)
- **Inputs:** White background, gold focus ring, rounded-xl
- **Sidebar:** Fixed-width 256px on desktop, overlay on mobile with backdrop blur

### Dark Mode
- Toggle via sun/moon icon in the dashboard header
- Preference persisted to `localStorage`
- Applied via `class` strategy on `<html>` element
- Cards get dark variants with `dark:` prefix
- Uses `bg-page-dark` / `bg-page-light` for the radial gradient background

---

## 6. Key Technical Decisions

### 6.1 — Mock Data Layer Instead of Database
**Why:** The public demo has no backend. Using `mock-data.ts` instead of Prisma/PostgreSQL means zero deployment dependencies. The entire app runs from static exports or a simple `next start`.

**Trade-off:** No persistence beyond page refresh (except wallet balance via localStorage). This is acceptable for a demo — real data would come from API endpoints in production.

### 6.2 — WalletContext for Balance Persistence
**Why:** The dashboard reloads when navigating between pages via the sidebar. A local `useState` would reset to $450 on every navigation. `WalletContext` wraps the entire dashboard and syncs to `localStorage` on every change.

**Implementation:**
```
WalletContext {
  balance: number        ← from localStorage (default: 450)
  setBalance(val)        ← manual set
  addBalance(amount)     ← deposit + claim
  deductBalance(amount)  ← withdrawal
}
```

### 6.3 — Deposit Processing Simulation
**Why:** A real deposit takes time (blockchain confirmation). The 4-second simulated delay with spinner + status text makes the flow feel realistic.

**Implementation:** `setTimeout()` inside `handleSubmit()` with intermediate state (`processing → done`). On completion, `addBalance(val)` is called on WalletContext and toast fires.

### 6.4 — Solid Colors Over Gradients
**Why:** The original version used gold→emerald gradients on buttons, badges, section headers, icon containers, text highlights, and accent lines (60+ locations). It looked like a generic template. Switching to solid `bg-gold-500` / `text-gold-500` made the design cleaner and more professional.

### 6.5 — Auth via Demo Mode Only
**Why:** This is a public demo. Real authentication (JWT, bcrypt, sessions) would add complexity with no benefit for the showcase. The "Enter Demo Mode" button creates a session in localStorage + cookie and loads the dashboard with pre-populated data. No signup, no password, no email.

---

## 7. Pages & Routes

### Public Pages (6)
| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about, plans, steps, features, CTA |
| `/login` | Sign in form + "Enter Demo Mode" button |
| `/register` | Create account form + "Enter Demo Mode" button |
| `/faq` | FAQ accordion (8 questions) |
| `/guide` | User guide (6 sections with numbered steps) |
| `/terms` | Terms of Service |
| `/privacy-policy` | Privacy Policy |

### Dashboard Pages (8)
| Route | Description |
|-------|-------------|
| `/dashboard` | Main dashboard with stats, daily claim, quick actions, investments, activity |
| `/dashboard/deposit` | Deposit flow with crypto options |
| `/dashboard/activity` | Transaction history with filtering |
| `/dashboard/membership` | Investment plan cards (6 tiers) |
| `/dashboard/referrals` | Referral link + referral list |
| `/dashboard/withdrawals` | Withdrawal form + history |
| `/dashboard/profile` | Profile editing |
| `/dashboard/support` | FAQ + contact form |

### Admin Pages (9)
| Route | Description |
|-------|-------------|
| `/admin` | Admin dashboard with stats + activity |
| `/admin/users` | User management table |
| `/admin/payments` | Payment management with approval |
| `/admin/recharges` | Investment tracking with progress |
| `/admin/withdrawals` | Withdrawal management with approve/reject |
| `/admin/plans` | Plan pricing cards |
| `/admin/settings` | Platform settings |
| `/admin/tickets` | Support ticket management |
| `/admin/changelog` | Version history |

### API Routes (13)
| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/login` | POST | Mock login |
| `/api/auth/register` | POST | Mock register |
| `/api/auth/logout` | POST | Mock logout |
| `/api/auth/refresh` | POST | Mock token refresh |
| `/api/dashboard` | GET | Mock dashboard data |
| `/api/demo/start` | POST | Start demo session |
| `/api/promo` | GET | Promo pricing data |
| `/api/transactions` | GET | Mock transactions |
| `/api/users` | GET | Mock users |
| `/api/withdrawals` | GET/POST | Mock withdrawals |
| `/api/payments/next-ref` | GET | Next payment reference |
| `/api/paymentsui` | GET/POST | Mock payment UI data |
| `/api/admin/settings` | GET/POST | Mock admin settings |

---

## 8. What This Demonstrates

### Engineering Skills
| Skill | Evidence |
|-------|----------|
| **System Architecture** | Designed a complete fintech platform with dashboard, deposit flow, membership tiers, referral system, withdrawal pipeline, and admin panel |
| **React + Next.js 14** | App Router, server/client components, layout nesting, context providers, dynamic routes |
| **TypeScript** | Full type coverage — interfaces for all data models, typed context providers, typed props |
| **State Management** | 3 React Context providers (Auth, Theme, Wallet) with localStorage persistence |
| **Tailwind CSS** | Responsive mobile-first layout, dark mode via class strategy, custom color palette, utility classes |
| **UI/UX Design** | Clean gold-accented design system, loading skeletons, toast notifications, responsive navigation, processing animations |
| **Component Architecture** | Reusable components (Logo, Navbar, Sidebar, PlanBadge, Skeleton), consistent API across pages |

### Product Thinking
- **Simulation-First UX** — Every interactive flow includes realistic timing and feedback
- **Progressive Disclosure** — Dashboard shows summary first, detailed features on dedicated pages
- **Demo-First Architecture** — Mock data layer makes the entire app instantly deployable without backend
- **Admin/User Separation** — Distinct interfaces for different roles with appropriate permissions

---

## 9. Development Timeline

| Phase | Time | Work |
|-------|------|------|
| Planning & Architecture | Day 1 | Component tree, data model, route design |
| Core Dashboard | Days 2–3 | Layout, sidebar, auth context, dashboard page |
| Deposit Flow | Day 4 | Crypto options, wallet addresses, processing simulation |
| Admin Panel | Days 5–6 | All 9 admin pages with tables, stats, actions |
| Static Pages & Polish | Day 7 | FAQ, guide, terms, privacy, loading skeletons, build fixes |
| Design Refinement | Day 8 | Gradient removal, solid gold color scheme, responsive fixes |
| Deployment | Day 9 | Git, GitHub, Vercel, build cleanup |

---

## Contact

**AOT AYO**

- **Portfolio:** [https://aot-network-portfolio.vercel.app/](https://aot-network-portfolio.vercel.app/)
- **Email:** aotayom34@gmail.com
- **Project Demo:** [https://prime-ledger-website.vercel.app/](https://prime-ledger-website.vercel.app/)
- **GitHub:** [https://github.com/adiiaot/PrimeLedger-Website](https://github.com/adiiaot/PrimeLedger-Website)
