// FRONTED - CLIENTE
//const socket = io(); // Si lo dejamos vació se va a conectar al mismo host desde el cual fue servido en este caso el 3000
// io devuelve un objeto con la conexión del servidor 

// socket.on('ping',()=>{
     // El script responde con el evento ping cuando este se conecta con el servidor 
     //console.log('Listened');
//     socket.emit('pong');
// })


const noteForm = document.querySelector('#noteForm'); // Capturamos los datos del formulario por el Id
const title = document.querySelector('#title') // Input dentro del noteForm
const description = document.querySelector('#description') // Input dentro del Noteform
// const notes = document.querySelector('#notes')


// Capturamos el evento submit del formulario al dar click en enviar, evento por defecto
noteForm.addEventListener('submit', e =>{
    e.preventDefault() //  Así no se recarga la página al presionar el botón 

    //console.log('Enviando',title.value,description.value)
    saveNote(title.value,description.value)

}) // Evento submit es cuandoe enviamos el formulario


