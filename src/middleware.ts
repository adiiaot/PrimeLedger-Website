import { NextResponse, type NextRequest } from 'next/server'

const publicPaths = ['/', '/login', '/register']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const tokenCookie = request.cookies.get('primeledger_token')
  const demoMode = request.cookies.get('demo_mode')
  const isAuthenticated = !!(tokenCookie?.value && demoMode?.value === 'true')

  if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      const url = new URL('/login', request.url)
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  if (pathname.startsWith('/api/admin')) {
    if (!isAuthenticated) {
      return NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.svg|uploads).*)',
  ],
}
