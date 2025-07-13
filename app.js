import express from 'express'
import {PORT} from './config/env.js' 
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import dbConnect from './database/mongodb.js';

const app=express();


app.get("/",(req,res)=>{
  res.send("Welcome to the Express Js tutorial")
})

app.use("/api/v1/auths",authRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/subscription",subscriptionRouter)

app.listen(PORT , async()=>{
  console.log(`Server is running successfully on:http://localhost:${PORT}`)
 await dbConnect();
})

export default app;