const express = require('express');
const path = require('path')
const Postar = require('./rotas/poste')


const server = express();

const PORT = 3000;
server.use('/rotas',Postar);
server.use(express.static(path.join(__dirname,"public")))



server.listen(PORT , ()=>{
     console.log(`o servidor inicia na porta ${PORT}`)
});