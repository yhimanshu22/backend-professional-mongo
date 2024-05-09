import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//making express app--------->

const app = express()

//middlewares---------->
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//taking data from form filled----->
app.use(express.json({ limit:'16kb'}))
//taking url form data--------->
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public')) // if stored files in public folder


export {app} 