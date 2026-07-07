export interface JWTPayload {
  userId: string
  email: string
  role: string
  accountActivated: boolean
}

export interface AuthUser {
  userId: string
  email: string
  role: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}
