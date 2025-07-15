import express from 'express'
import {PORT} from './config/env.js' 
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import dbConnect from './database/mongodb.js';
import errorMiddleWare from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import { arcjetMiddleware } from './middleware/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';


const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(arcjetMiddleware);
app.use("/api/v1/auths",authRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/subscription",subscriptionRouter)
app.use("/api/v1/workflows",workflowRouter)

app.use(errorMiddleWare)


app.get("/",(req,res)=>{
  res.send("Welcome to the Express Js tutorial")
})
app.listen(PORT , async()=>{
  console.log(`Server is running successfully on----> http://localhost:${PORT}`)
 await dbConnect();
})

export default app;