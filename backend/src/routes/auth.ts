import express, { Router } from 'express'
import { checkSession, login } from '../controllers/authController'
import { jwtVerify } from '../middleware/jwtVerify'

const router: Router = express.Router()

router.post('/login', login)
router.post('/check-session', jwtVerify, checkSession)

export default router
