import jwt from 'jsonwebtoken'

function productMiddleware(req, res, next) {
    const token = req.headers['authorization']
    console.log(token)
    //the productauth header in the req json
    if (!token) { return res.status(401).json({ message: "No token provided" }) }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) { return res.status(401).json({ message: "Invalid token" }) }

        req.prodid = decoded.id
        next()
    })
}

export default productMiddleware