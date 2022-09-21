import { Request, Response } from 'express'
import { validatePassword, validateString } from '../utils/validators'
import { encodeToken } from '../utils/jwt'

export function login(req: Request, res: Response, next: Function) {
  if (!validateString(req.body.email)) {
    try {
      throw new Error('invalid-email')
    } catch (error) {
      res.status(400)
      next(error)
      return
    }
  }

  if (!validatePassword(req.body.password)) {
    try {
      throw new Error('invalid-password')
    } catch (error) {
      res.status(400)
      next(error)
      return
    }
  }

  try {
    if (
      req.body.email.toLowerCase() !== 'admin' ||
      req.body.password.toLowerCase() !== 'admin'
    ) {
      res.status(400)
      throw new Error('wrong-credentials')
    }
    // if (!data) {
    //   throw new Error('wrong-credentials')
    // }
    // if (!compare(req.body.password, data.password)) {
    //   throw new Error('wrong-credentials')
    // }
    const data = {
      email: 'admin',
      name: 'admin',
      _id: 1,
    }
    const token = encodeToken({
      email: data.email,
      name: data.name,
      id: data._id,
    })

    res.json({ token, data: { email: data.email, name: data.name } })
  } catch (error) {
    next(error)
    return
  }
}

export function checkSession(
  req: Request,
  res: Response,
  next: Function
): void {
  delete res.locals.user._id
  delete res.locals.user.exp
  res.json({ res: 'ok', data: res.locals.user })
}

// export async function register(
//   req: Request,
//   res: Response,
//   next: Function
// ): Promise<void> {
//   if (!validateString(req.body.email)) {
//     try {
//       throw new Error('invalid-email')
//     } catch (error) {
//       res.status(400)
//       next(error)
//     }
//   }

//   if (!validateString(req.body.name)) {
//     try {
//       throw new Error('invalid-name')
//     } catch (error) {
//       res.status(400)
//       next(error)
//     }
//   }

//   if (!validatePassword(req.body.password)) {
//     try {
//       throw new Error('invalid-password')
//     } catch (error) {
//       res.status(400)
//       next(error)
//       return
//     }
//   }
//   try {
//     if (data) {
//       throw new Error('email-exists')
//     }
//   } catch (error) {
//     res.status(400)
//     next(error)
//     return
//   }
// }
