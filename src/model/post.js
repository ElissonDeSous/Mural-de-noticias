module.exports = {
    posts : [
        {
            id : 1231 ,
            Titulo: 'Este é meu mural' ,
            Descrição: 'Neste mural, vou ser capaz de anotar acontecimentos da minha vida para não esquecer'
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(Titulo,Descrição){
      this.posts.push({id:generateID(),Titulo,Descrição})
    }
}


function generateID(){
    return Math.random().toString(3.6).substring(2,9);
}