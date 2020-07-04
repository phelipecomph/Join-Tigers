const express = require("express")
const server = express()

server.use(express.static("public"))


//configurar pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/admin", (req, res) => {
    return res.render("admin.html")
})


//Ligar o servidor
console.log("Server ligado")
server.listen(5502)