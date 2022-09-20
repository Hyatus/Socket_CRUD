// BACKEND 
import express from "express";
import {Server as WebSocketServer} from "socket.io";
import http from 'http';
import {v4 as uuid } from 'uuid';

const app = express();
const server = http.createServer(app) // Modulo servidor que utiliza la configuración de Express y lo guarda en la variable httpServer
const io = new WebSocketServer(server) // Es la conexión desde el servidor

app.use(express.static(__dirname + '/public'))

const notes = [];

io.on('connection',(socket)=>{
    // El socket es el cliente 
    // console.log('Nueva Conexión: ', socket.id);

    // socket.emit('ping')// Emitir un evento
    
    // socket.on('pong',()=>{
    //     console.log('Received')
    // })

    socket.on('client:newnote',newNote =>{
        const note = ({...newNote,id:uuid()})
        console.log(note)
        notes.push(note)
    });
    //socket.emit('server:rendernotes')

})



// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

server.listen(3000);
console.log('Server on port',3000);



