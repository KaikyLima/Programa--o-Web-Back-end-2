const express = require("express")
const router = express.Router()
const {prisma} = require("../db/prisma")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


router.post("/register", async(req,res) =>{
    const userExiste = await prisma.users.findFirst({
        where:{
            email: req.body.email
        }
    })
    if (userExiste) return res.status(400).json({
        message: "Usuário já existe"
    })
    const hash = bcrypt.hashSync(req.body.password,10)
    const user = await prisma.users.create({
        data: {
            email: req.body.email,
            password: hash
        }
    })
    delete user.password
    res.send(user)
})

router.post("/login", async(req,res)=>{
    const userExiste = await prisma.users.findFirst({
        where: {
            email: req.body.email
        }
    });
    if(!userExiste) return res.status(401).json({message: "Invalido"})
    const isPasswordTheSame = bcrypt.compareSync(req.body.password, userExiste.password)
    if (!isPasswordTheSame) return res.status(401).json({message: "Invalido"})
    const token = jwt.sign(
        { id: userExiste.id, email: userExiste.email }, 
        process.env.SECRET);
    res.json({
        sucess: true,
        token
    })
})

module.exports = {
    router
}