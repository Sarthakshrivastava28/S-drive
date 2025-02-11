import express from 'express'
import userRouter from './routes/user.routes.js'
import morgan from "morgan";
import dotenv from "dotenv"
import connectoDb from './config/db.js';
import cookieParser from "cookie-parser";
import indexRouter from './routes/index.routes.js'
const app = express()
const Port=3000
dotenv.config({ 
    path:'./.env', 
})


//middle ware 
app.use(express.static('public'))
app.set('view engine' , 'ejs')
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

connectoDb()




app.use('/user',userRouter)
app.use('/',indexRouter)

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`)
})