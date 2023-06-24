import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import cors from 'cors'
import { connectDb } from './db/db.js'
import errorHandler from './middlwares/errorMiddleware.js'
import authRoutes from './routes/Auth/authRoutes.js'
import chatRoutes from './routes/Chat/chatRoutes.js'
import userRoutes from './routes/User/userRoutes.js'
import useSocket from './sockets/useSocket.js'


// define variables
dotenv.config()
const app=express()
const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:process.env.FRONTEND_URLS,
        methods:['GET','POST','DELETE','PUT','PATCH'],
        credentials:true
    }
})
const PORT=process.env.PORT || 5000


// config of the api 
app.use(cors({origin:[process.env.FRONTEND_URLS]}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// connect db
connectDb(process.env.DB_URL)



// sockets 
io.on('connection',socket=>{
    
    useSocket(io,socket)

    // DISCONNECT EVENT
    socket.on('disconnect', () => {
        if(socket.activeRooms && socket.userId) 
            io.to(socket.activeRooms).emit('on_user_offline',socket.userId);
    });
    
})

app.io=io;
app.use('/auth',authRoutes)
app.use('/chat',chatRoutes)
app.use('/user',userRoutes);
app.use(errorHandler)

server.listen(PORT,()=>console.log(`Server Running On Port ${PORT}`))