import express, { Router } from 'express'
import { verifyId } from '../middleware/handlers'

const router: Router = express.Router()

router.use('/:id', verifyId)
router.route('/:id').get()

export default router
