import express from 'express'
// import { Request, Response } from 'express';
import dotenv from 'dotenv'
dotenv.config()

import Pizza from './routes/pizzaRoute'
import PizzaAdmin from './routes/admin/pizzaRoutes'
import AlergenAdmin from './routes/admin/alergenRoutes'
import SizeAdmin from './routes/admin/sizeRoutes'
import OrderAdmin from './routes/admin/orderRoutes'
import ToppingAdmin from './routes/admin/toppingRoutes'
import ImageAdmin from './routes/admin/imagesRoutes'
import Auth from './routes/auth'

import { errorHandler } from './middleware/errorHandler'
import { jwtVerify } from './middleware/jwtVerify'

if (!process.env.JWT_SECRET) {
  throw new Error('No secret defined!')
}

const port = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Allows to reslove cross-origin requests
app.use((_, res, next) => {
  res.set('Access-Control-Allow-Origin', '*') // or 'localhost:8888'
  res.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE')
  res.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  return next()
})

// app.get('/api', (req: Request, res: Response): void => {
//   res.send('Hello World');
// })

app.use('/api/admin/*', jwtVerify)

app.use('/api/auth', Auth)
app.use('/api/pizza', Pizza)
app.use('/api/admin/pizza', PizzaAdmin)
app.use('/api/admin/alergen', AlergenAdmin)
app.use('/api/admin/topping', ToppingAdmin)
app.use('/api/admin/size', SizeAdmin)
app.use('/api/admin/order', OrderAdmin)
app.use('/api/admin/images', ImageAdmin)

app.use(errorHandler)

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`)
})
