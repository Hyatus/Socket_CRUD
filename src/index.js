// BACKEND 
import express from "express";
import {Server as WebSocketServer} from "socket.io";
import http from 'http';
import {v4 as uuid } from 'uuid';

const app = express();
const server = http.createServer(app) // Modulo servidor que utiliza la configuración de Express y lo guarda en la variable httpServer
const io = new WebSocketServer(server) // Es la conexión desde el servidor

app.use(express.static(__dirname + '/public'))

let notes = [];

io.on('connection',(socket)=>{
    // El socket es el cliente 
    console.log('Nueva Conexión: ', socket.id);

    socket.emit('server:loadnotes',notes);

    // socket.emit('ping')
    // socket.on('pong',()=>{
    //     console.log('Received')
    // })

    socket.on('client:newnote',newNote =>{
        // uuid nos genera un id aleatorio 
        const note = ({...newNote,id:uuid()})
        //console.log(note)
        notes.push(note)

        socket.emit('server:newnote',note)

    });
    
    //socket.emit('server:rendernotes')

    socket.on('client:deletenote',(noteId) =>{
        //console.log(id)
        notes = notes.filter((note) => note.id !== noteId); // Devuelve un nuevo arreglo sin el elemento que se filtró 
        //console.log(notes)
        socket.emit('server:loadnotes',notes) // Hago la petición para que se rendericen de nuevo las notas
    });

    
    socket.on('client:getnote',(noteId) =>{
        console.log(noteId);
        const note = notes.find(note => note.id === noteId); // Devuelve un elemento 
        socket.emit('server:selectednote',note);
        console.log(note);
        
    });

    socket.on('client:updatenote',(updatedNote) => {
        console.log(updatedNote);

        notes = notes.map((note) => {
            if(note.id === updatedNote.id){
                note.title = updatedNote.title
                note.description = updatedNote.description
            }

            return note;
        });
        
        socket.emit('server:loadnotes',notes);
    })

});



// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

server.listen(3000);
console.log('Server on port',3000);



