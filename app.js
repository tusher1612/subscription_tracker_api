import express from 'express'
import {PORT} from './config/env.js' 

const app=express();






app.get("/",(req,res)=> {
  res.send("welcome to the tracking api")
})


app.listen(PORT , ()=>{
  console.log(`Server is running successfully on:http://localhost:${PORT}`)
})

export default app;