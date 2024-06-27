const express = require("express")
const { request } = require("http")
const {router: routerUsers} = require("./routes/users")
const {router: routerMusic} = require("./routes/musics")
const server = express()
server.use(express.json())


server.use(routerUsers)
server.use(routerMusic)
const port = 8080
server.listen(port, () =>{
        console.log(`Servidor rodando na porta ${port}`)
})
