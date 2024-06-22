import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
let app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
import bookRoute from './route/BookRoute.js'
import UserRoute from './route/UserRoute.js'
let port = process.env.PORT||4000
const mongodburi = process.env.MONGODBURI


// connect to mongodb
try{
mongoose.connect(mongodburi,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("connected to mongodb")
}catch(error){

}
app.use('/book',bookRoute)
app.use('/User',UserRoute)
app.listen(port,()=>{
    console.log("connected on port")
})