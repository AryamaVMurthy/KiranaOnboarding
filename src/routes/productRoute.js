import express from 'express'
import prisma from '../prismaClient.js'

const productRoutes = express.Router()

//creating a new product
//vendor fills all the details of product and clicks create button
productRoutes.post('/',async(req,res)=>{
    try {
        const {name, description, verificationStatus,availibilityStatus, price,vendorId,image} = req.body
        
        if (!name || !description || verificationStatus === undefined || !price || !vendorId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const prod = await prisma.product.create({
            data:{
                name,
                description,
                verificationStatus:Boolean(verificationStatus), 
                availibilityStatus:Boolean(availibilityStatus),
                price, 
                image,
                vendorId
            }
        })
        res.status(201).json(prod)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' })
    }
})

//product catalogue
//when view all catalogue button is clicked
//middleware might be needed here instead of sending vendorId
productRoutes.get('/',async(req,res)=>{
    try {
        const {vendorId} = req.body
        if (!vendorId) {
            return res.status(400).json({ error: 'VendorId is required' });
        }
        const prodCatalogue = await prisma.product.findMany({
            where:{ vendorId }
        })
        res.status(200).json(prodCatalogue)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' })
    }
})

//product update
//all the new info(new+old) is put inside and an update button is clicked
productRoutes.put('/:id',async(req,res)=>{
    const {name, description, verificationStatus,availibilityStatus, price,image} = req.body
    const upProd = await prisma.product.update({
        where:{
            id: parseInt(req.params.id)
        },

        data:{
            name,
            description,
            verificationStatus:Boolean(verificationStatus), 
            availibilityStatus:Boolean(availibilityStatus),
            price,
            image
        }
    })

    res.json(upProd)
})

productRoutes.delete('/:id',async(req,res)=>{
    const delprod = await prisma.product.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })

    res.json("Deleted the required product")
})

export default productRoutes