// FRONTED
const socket = io(); // Si lo dejamos vació se va a conectar al mismo host desde el cual fue servido en este caso el 3000
// io devuelve un objeto con la conexión del servidor 

// socket.on('ping',()=>{
     // El script responde con el evento ping cuando este se conecta con el servidor 
     //console.log('Listened');
//     socket.emit('pong');
// })


const noteForm = document.querySelector('#noteForm');
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const notes = document.querySelector('#notes')

noteForm.addEventListener('submit', e =>{
    e.preventDefault() //  Así no se recarga la página al presionar el botón 

    //console.log('Enviando',title.value,description.value)

    socket.emit('client:newnote', {
        title: title.value,
        description: description.value
    })
    
    socket.on('server:newnote',data => {
       notes.innerHTML += ' new note '
    })
}) // Evento submit es cuandoe enviamos el formulario


