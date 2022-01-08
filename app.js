const express=require('express')
const tasks=require('./routes/tasks.router')
const connectDb = require('./db/connect')
const notFound = require('./middlewares/notFound.middleware')
require('dotenv').config()
const errorHandler = require('./middlewares/errorHandler.middleware')
const PORT = process.env.PORT ?? 3000
const app= express()

// midleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)


app.use(errorHandler)


const start = async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, console.log('running on', PORT))
    } catch(error) { 
        console.log(error)
    }
    
}
start()