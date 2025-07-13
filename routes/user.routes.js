import { Router } from "express";

const userRouter=Router();

userRouter.get("/",(req,res)=>{
    res.send("GET all the users")
})
userRouter.get("/:id",(req,res)=>{
    res.send("GET  user's details")
})

userRouter.post("/",(req,res)=>{
    res.send({body:"Post user's data"})
})
userRouter.put("/:id",(req,res)=>{
    res.send({body:"user's data UPDATE"})
})
userRouter.delete("/:id",(req,res)=>{
    res.send({body:"user's data delete"})
})

export default userRouter;