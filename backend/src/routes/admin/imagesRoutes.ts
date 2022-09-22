import express, { Router } from 'express'
import {
  getAllImageIds,
  getImageById,
  postImage,
  updateImage,
} from '../../controllers/admin/imagesController'
import { verifyId } from '../../middleware/handlers'
import { upload } from '../../utils/multer'

const router: Router = express.Router()

router.use('/:id', verifyId)
// router.route('/:id').get()
router.route('/').post(postImage).get(getAllImageIds)
// router.route('/').post(upload.single('file'), postImage).get(getAllImageIds)
router.route('/:id').get(getImageById).put(updateImage)

export default router
