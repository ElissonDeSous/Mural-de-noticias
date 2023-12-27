

document.addEventListener("DOMContentLoaded",()=>{
   updatePost();
})


function updatePost()
{

    // pegar rota da API
      fetch("http://192.168.0.107:3000/rotas/all").then(res=>{
       return res.json()
      }).then(json => {

         let postElements = '';

         let posts = JSON.parse(json);

         posts.forEach((posts)=>{
             let postElement = `<div class = "card" id=${posts.id}>
             <div class="cardTitle">
                   ${posts.Titulo}
             </div>

             <div class="cardDescrição">
               ${posts.Descrição}
             </div>
           </div>`

           postElements += postElement;
         })

          document.getElementById('post').innerHTML = postElements;
      })
}

function newPost()
{
   let Titulo = document.getElementById('Titulo').value;
   let Descrição = document.getElementById('Descrição').value;

  let post = {Titulo,Descrição}

  let option = {
    method : "POST",
    headers: new Headers({'content-type':'application/json'}),
    body: JSON.stringify(post)
}
  fetch("http://192.168.0.107:3000/rotas/new", option).then(res=>{
    console.log(res)
    updatePost();
    document.getElementById('Titulo').value = '';
    Descrição = document.getElementById('Descrição').value =''
    
  })
}