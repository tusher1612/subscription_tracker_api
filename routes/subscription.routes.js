import { Router } from "express";
import { authorize } from "../middleware/authorize.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter=Router();

subscriptionRouter.get("/",(req,res)=>{
    res.send("GET all the subscription")
})
subscriptionRouter.get("/:id",(req,res)=>{
    res.send("GET  user's subscription details")
})

subscriptionRouter.post("/",authorize,createSubscription)
subscriptionRouter.put("/:id",(req,res)=>{
    res.send({body:"Subscription data UPDATE"})
})
subscriptionRouter.delete("/:id",(req,res)=>{
    res.send({body:"subscription delete"})
})

export default subscriptionRouter;