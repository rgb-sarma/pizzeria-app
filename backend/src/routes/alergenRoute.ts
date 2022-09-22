import express, { Router } from 'express'
import { getAllAlergens } from '../controllers/admin/alergenController'

const router: Router = express.Router()
// router.use('/:id' , verifyId);

router.route('/').get(getAllAlergens)

export default router
