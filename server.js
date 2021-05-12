const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false
})

server.get("/", function(req, res){

 const about = {
    avatar_url:"https://avatars.githubusercontent.com/u/31977689?s=400&u=91604a852a531d1ce948d40df3c766c73f158d73&v=4",
    name:"Eduardo Kainan",
    role: "Aluno - Rocketseat",
    description:"Programador Trainner, focado em aprender",
   
    links: [

      {name: "GitHub", url: "https://github.com/EduardoKainan"},
      {name: "Instagram", url: "https://www.instagram.com/edua_rdu/"},
      {name: "linkedin", url: "https://www.linkedin.com/in/eduardo-kainan-leite-sousa-14b26024/"}
    ]

  }
 
  return res.render("about", {about})
})

server.get("/portfolio", function(req, res){
  return res.render("portfolio", {items: videos})
})

server.listen(5000, function(){
  console.log("server is running")

  }) 