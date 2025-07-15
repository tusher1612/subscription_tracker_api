import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middleware/authorize.middleware.js";

const userRouter=Router();

userRouter.get("/", getUsers)
userRouter.get("/:id",authorize,getUser)

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