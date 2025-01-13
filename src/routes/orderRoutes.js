import express from 'express'
import prisma from '../prismaClient.js'


const orderRoutes = express.Router()


//giving all the order list when asked by our seller
orderRoutes.get('/',async(req,res)=>{
    const orderList = await prisma.order.findMany({
        where:{
            productId: req.prodid
        }
    })

    res.json(orderList)
})



//:id is for order id
orderRoutes.put('/:id',async(req,res)=>{
    //incase the seller wants to approve it 
    const {approval} = req.body
    const upOrd = await prisma.order.update({
        where:{
            orderId: parseInt(req.params.id)
        },

        data:{
            approval:Boolean(approval)
        }
    })

    res.json(upOrd)
})

//:id is the order id
orderRoutes.delete('/:id',async(req,res)=>{
    const delorder = await prisma.order.delete({
        where:{
            orderId: parseInt(req.params.id)
        }
    })

    res.json("Sorry I can't place this order")
})

export default orderRoutes