const express = require("express")
const router = express.Router()
const {prisma} = require("../db/prisma")
const { Prisma } = require("@prisma/client")
const { auth } = require("../middlewares/auth")

router.get("/tasks", auth, async (req, res) => {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
});

router.get("/tasks/:id",auth, async (req, res) =>{
    const id = Number(req.params.id)
    const tasks = await prisma.tasks.findMany({
        where:{
            id
        }
    })
    if(!tasks) return res
        .status(404).json({message: `Tarefa id ${id} não encontrada`})
    res.json(tasks)
})





router.post("/tasks",auth, async (req, res) => {
    const data = req.body
    const task = await prisma.tasks.create({
        data:{
            name: data.name,
            description: data.description,
            isDone: data.isDone
        }
    })
    res.status(201).json(task)
})



router.put("/tasks/:id",auth, async(req,res) =>{
    const id = Number(req.params.id)
    const task = await prisma.tasks.update({
        data:{
            name: req.body.name,
            description: req.body.description,
            isDone: req.body.isDone
        },
        where:{
            id
        }
    })
    res.json(task)

})


router.delete("/tasks/:id",auth, async(req, res) =>{
    const id = Number(req.params.id)
    const task = await prisma.tasks.delete({
        where:{
            id
        }
    })
    res.status(204).send();
})


module.exports = {
    router
}