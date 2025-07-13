import { Router } from "express";

const subscriptionRouter=Router();

subscriptionRouter.get("/",(req,res)=>{
    res.send("GET all the subscription")
})
subscriptionRouter.get("/:id",(req,res)=>{
    res.send("GET  user's subscription details")
})

subscriptionRouter.post("/",(req,res)=>{
    res.send({body:"subscription data POST"})
})
subscriptionRouter.put("/:id",(req,res)=>{
    res.send({body:"Subscription data UPDATE"})
})
subscriptionRouter.delete("/:id",(req,res)=>{
    res.send({body:"subscription delete"})
})

export default subscriptionRouter;