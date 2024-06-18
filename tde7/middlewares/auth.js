
const jwt = require ("jsonwebtoken")

const auth = (req,res,next) =>{
    try{
        const token = req.headers.authorization
        if(!token) return res.status(401).send()
        const payload = jwt.verify(token, process.env.SECRET)
        req.user = payload.id
        next()
    }catch(error){
        res.status(401).send()
    }
    
}
module.exports = {
    auth
}