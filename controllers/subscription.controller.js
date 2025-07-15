import {workflowClient} from '../config/upstash.js';
import { SERVER_URL } from "../config/env.js";
import Subscription from "../models/subscription.model.js";


export const createSubscription=async (req,res,next)=>{
    try {
        const subscription= await Subscription.create({
      ...req.body,
       user:req.user.id
        })

   const {workflowRunId}=   await workflowClient.trigger({
  url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
    body: {
        subscriptionId:subscription.id
    },
    headers:{
   'content-type':'application/json'
    },
    retries:0
  })


    res.status(201).json({ success: true, data: { subscription, workflowRunId } });
        
    } catch (error) {
     console.error(error);
     next(error)        
    }
}

//get all the subscription
export const  getAllSubscription=async (req,res,next)=>{

    try {
        const subscriptions= await Subscription.find().select('-password');
        res.status(200).json({
            success:true,
            data:subscriptions
        })

    } catch (error) {
    next(error)    
    }
}

//get all the subscription
export const  getSubscriptionDetails=async (req,res,next)=>{

    try {
        const subscriptionDetails= await Subscription.findById(req.params.id);
        res.status(200).json({
            success:true,
            data:subscriptionDetails
        })

    } catch (error) {
    next(error)    
    }
}



export const  getUserSubscription=async (req,res,next)=>{
    try {
        if(req.user.id !== req.params.id){
            const error = new Error("You are not owner of this account");
                error.status=401;
                throw error;
        }

        const userSubscriptionList= await Subscription.find({user:req.params.id}).select('-user');
        res.status(200).json({
            success:true,
            data:userSubscriptionList
              })
        
    } catch (error) {
        next(error)
        
    }
}