const express = require("express")
const { request } = require("http")
const {router: routerContatos} = require("./routes/contatos")
const {router: routerUsers} = require("./routes/users")
const server = express()
server.use(express.json())


server.use("/v1",routerContatos)
server.use("/v1",routerUsers)
const port = 8080
server.listen(port, () =>{
        console.log(`Servidor rodando na porta ${port}`)
})
