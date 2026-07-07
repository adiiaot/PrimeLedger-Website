export type { JWTPayload } from './types'
export type { AuthUser } from './types'

export function hashPassword(password: string): string {
  return 'hashed_' + password
}

export function comparePassword(password: string, hash: string): boolean {
  return hash === 'hashed_' + password
}

export function generateUserCode(): string {
  const suffix = Array.from({ length: 6 }, () =>
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]
  ).join('')
  return 'PL-' + suffix
}

export function generatePaymentReference(index: number): string {
  return 'PL-PAY-' + String(index).padStart(6, '0')
}
