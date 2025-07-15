import { Router } from "express";
import { authorize } from "../middleware/authorize.middleware.js";
import { createSubscription,getAllSubscription,getSubscriptionDetails, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter=Router();

subscriptionRouter.get("/",getAllSubscription)
subscriptionRouter.get("/:id",getSubscriptionDetails)
subscriptionRouter.get("/user/:id",authorize,getUserSubscription)
subscriptionRouter.post("/add-subscription",authorize,createSubscription)

subscriptionRouter.delete("/:id",(req,res)=>{
    res.send({body:"subscription delete"})
})

export default subscriptionRouter;