// VA A GUARDAR LA CONEXIÓN DE WEB SOCKETS SERVIDOR
/**
 * Save a new note
 * @param {string} title note title
 * @param {string} description note description
 */
const socket = io();

const saveNote = (title,description) => {
    // Envía un objeto
    socket.emit('client:newnote', {
        title: title,
        description: description
    })
    
}

// Escucha cuando una nueva nota es añadida
socket.on('server:newnote',appendNote); // Ya se sabe que appendNote recibe un dato 

socket.on('server:loadnotes',renderNotes); // Carga las notas que ya están almacenadas 


socket.on('server:selectednote',(note) => {
    //console.log('Hola',note)
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    title.value = ''
    description.value = ''
    title.value += note.title;
    description.value += note.description;

    savedId = note.id 

});


const updateNote = (id,title,description) =>{
    socket.emit('client:updatenote',{
        id,
        title,
        description
    })
}


const deleteNote = (id) => {
    //console.log(id);
    socket.emit('client:deletenote',id);
}

const getNote = (id) => {
    socket.emit('client:getnote',id);
}

