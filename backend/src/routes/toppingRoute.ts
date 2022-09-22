import express, { Router } from 'express'

import { getAllToppings } from '../controllers/admin/toppingController'

const router: Router = express.Router()
// router.use('/:id' , verifyId);

router.route('/').get(getAllToppings)

export default router
