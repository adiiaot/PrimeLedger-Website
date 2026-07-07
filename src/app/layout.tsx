import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'PrimeLedger — Advanced Earning Platform',
  description: 'PrimeLedger — Advanced Earning Platform. Deposit, Earn, and Grow with PrimeLedger.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-page-light dark:bg-page-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans antialiased">
        <AuthProvider>
          <ThemeProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1e293b',
                  color: '#f1f5f9',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                },
              }}
            />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
