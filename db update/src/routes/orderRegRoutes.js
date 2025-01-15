import express from 'express'
import prisma from '../prismaClient.js'


const orderRegRoutes = express.Router()

//creating a new order
//the buyer will have given an order and clicked on order in the buyer app
//the info will be stored in the vendor side database
//it will also be stored in the buyer database
orderRegRoutes.post('/',async(req,res)=>{
    //console.log('Request Body:', req.body);

    const {quantity,approval,productId} = req.body
    const order = await prisma.order.create({
        data:{
            quantity,
            approval:Boolean(approval),
            lastUpdate: new Date(),
            productId
        }
    })

    res.json(order)
})

export default orderRegRoutes