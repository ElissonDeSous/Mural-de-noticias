const bodyParser = require('body-parser');
const express = require('express');

const cors =  require('cors')

const posts = require('../model/post')
 

const rotas = express.Router();

rotas.use(cors());

rotas.get('/all',(req,res)=> {
    res.json(JSON.stringify(posts.getAll()))
})

rotas.post('/new', bodyParser.json(), (req,res)=>{
    let Titulo = req.body.Titulo;
    let Descrição = req.body.Descrição;

    posts.newPost(Titulo,Descrição)
  

   res.send('post sendo adicionado')
})



module.exports = rotas