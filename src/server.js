import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import productRoutes from './routes/productRoute.js'
import orderRoutes from './routes/orderRoutes.js'
import orderRegRoutes from './routes/orderRegRoutes.js'
import productMiddleware from './middleware/productMiddleware.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/product',productRoutes)
app.use('/ordersReg',orderRegRoutes)
app.use('/orders',productMiddleware,orderRoutes)


app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})