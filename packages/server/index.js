const express=require('express');
const cors=require('cors');
const app=express() ;
const { Server }=require('socket.io');
const http=require('http');

const server=http.createServer(app);

app.use(cors());

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
    
});

io.on("connection",(socket)=>{
    console.log("connected device :"+socket.id)

    socket.on("send_message",(message)=>{
        socket.broadcast.emit("receive_message",{message:message})
        // socket.emit("receive_message2",{message:message})

    })
})

server.listen(8000,()=>{
    console.log('server started')
})