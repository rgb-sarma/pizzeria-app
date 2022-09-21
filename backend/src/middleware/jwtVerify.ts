import { Request, Response } from 'express'
import { decodeToken } from '../utils/jwt'

export function jwtVerify(req: Request, res: Response, next: Function) {
  let token = req.header('Authorization')
  if (!token) {
    res.status(400)
    next(new Error('Invalid token.'))
    return
  }
  const arr = token.split(' ')
  if (arr.length !== 2) {
    res.status(400)
    next(new Error('Invalid token.'))
    return
  }
  if (arr[0].toLowerCase() !== 'bearer') {
    res.status(400)
    next(new Error('Invalid token.'))
    return
  }

  token = arr[1]

  try {
    const decoded = decodeToken(token)
    res.locals.user = decoded
    next()
  } catch (ex) {
    res.status(400)
    next(new Error('Invalid token.'))
    return
  }
}
