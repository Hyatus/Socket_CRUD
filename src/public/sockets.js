// VA A GUARDAR LA CONEXIÓN DE WEB SOCKETS SERVIDOR
const socket = io();

const saveNote = (title,description) => {
    socket.emit('client:newnote', {
        title: title,
        description: description
    })
    
}

// Escucha cuando una nueva nota es añadida
socket.on('server:newnote',appendNote); // Ya se sabe que appendNote recibe un dato 

socket.on('server:loadnotes',renderNotes); // Carga las notas que ya están almacenadas 

const deleteNote = (id) => {
    //console.log(id);
    socket.emit('client:deletenote',id);
}