// BACKEND 
import express from "express";
import {Server as WebSocketServer} from "socket.io";
import http from 'http';


const app = express();
const httpServer = http.createServer(app) // Modulo servidor que utiliza la configuración de Express y lo guarda en la variable httpServer
const io = new WebSocketServer(httpServer) // Es la conexión desde el servidor

app.use(express.static(__dirname + '/public'))

io.on('connection',()=>{
    console.log('Nueva Conexión');
})



// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

app.listen(3000);
console.log('Server on port',3000);


