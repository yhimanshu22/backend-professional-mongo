//require('dotenv').config({path:'./env'});  //but this is bad practice---->
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})

import express from 'express';
const app =express();



//first approach----->
/*-------------->
(async ()=>{
    try {
        //connnecting to database
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
        app.on('error',(error)=>{
            console.log('error ocurred',error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error('ERROR:',error)
        throw err
    }
})()  -----------> */ 
