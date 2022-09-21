import express, { Router } from 'express'

import { getAllPizzas } from '../controllers/admin/pizzaController'

const router: Router = express.Router()
// router.use('/:id' , verifyId);

router.route('/').get(getAllPizzas)

export default router
