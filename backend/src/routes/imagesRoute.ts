import express, { Router } from 'express'
import { getImageById } from '../controllers/admin/imagesController'
import { verifyId } from '../middleware/handlers'


const router: Router = express.Router()

router.use('/:id', verifyId)
router.route('/:id').get(getImageById)

export default router
