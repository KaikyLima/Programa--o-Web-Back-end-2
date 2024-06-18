const express = require("express")
const router = express.Router()
const {prisma} = require("../db/prisma")
const { Prisma } = require("@prisma/client")
const { auth } = require("../middlewares/auth")

router.get("/contatos",auth, async(req,res) =>{
    const contatos = await prisma.contatos.findMany();
    res.json(contatos)
})




router.get("/contatos/:id",auth, async (req, res) =>{
    const id = Number(req.params.id)
    const contatos = await prisma.contatos.findMany({
        where:{
            id
        }
    })
    if(!contatos) return res
        .status(404).json({message: `Tarefa id ${id} não encontrada`})
    res.json(contatos)
})




router.post("/contatos",auth, async (req, res) => {
    const data = req.body
    const contato = await prisma.contatos.create({
        data:{
            name: data.name,
            phone: data.phone,
            email: data.email,
        }
    })
    res.status(201).json(contato)
})




router.put("/contatos/:id",auth, async(req,res) =>{
    const id = Number(req.params.id)
    const contato = await prisma.contatos.update({
        data:{
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            userId: req.body.userId
        },
        where:{
            id
        }
    })
    res.json(contato)

})



router.delete("/contatos/:id",auth, async(req, res) =>{
    const id = Number(req.params.id)
    const contato = await prisma.contatos.delete({
        where:{
            id
        }
    })
    res.status(204).send();
})

module.exports = {
    router
}