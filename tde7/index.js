const express = require("express")
const server = express()
server.use(express.json())
const {router : movieRouter} = require("./routes/tasks")
const {router : userRouter} = require("./routes/users")

server.use((req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    next()
})
server.use(movieRouter)
server.use(userRouter)
const port = 8080
server.listen(port,() =>{
    console.log("Servidor rodando")
})
