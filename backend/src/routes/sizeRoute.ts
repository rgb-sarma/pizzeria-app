import express, { Router } from 'express'
import { getAllSizes } from '../controllers/admin/sizeController'

const router: Router = express.Router()
// router.use('/:id' , verifyId);

router.route('/').get(getAllSizes)

export default router
