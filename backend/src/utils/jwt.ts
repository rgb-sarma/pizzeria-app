import { verify, sign } from 'jsonwebtoken'

export function decodeToken(token: string): any {
  let secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('No secret defined!')
  }

  secret = secret
  return verify(token, secret)
}

export function encodeToken(data: any): string {
  let secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('No secret defined!')
  }

  secret = secret
  let obj = {
    data,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  }
  return sign(obj, secret)
}
