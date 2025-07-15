import Subscription from "../models/subscription.model.js";


export const createSubscription=async (req,res,next)=>{
    try {
        const subscription= await Subscription.create({
      ...req.body,
       user:req.user.id
        })

        res.status(201).json({success:true,data:subscription})
        
    } catch (error) {
     console.error(error);
     next(error)        
    }
}