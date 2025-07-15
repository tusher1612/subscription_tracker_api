
import { JWT_SECRET } from "../config/env.js";
import User from "../models/users.model.js";
import jwt from 'jsonwebtoken'


export const authorize= async(req,res,next)=>{
    try {
        
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
          token = req.headers.authorization.split(' ')[1];
        }
if(!token) {
    return res.status(401).json({ message: 'Unauthorized' });
}

 
 const decodedUserToken= jwt.verify(token,JWT_SECRET);
 const user= await User.findById(decodedUserToken.userId);
 if(!user) {
    res.status(401).json({message:'Unauthorized'})
 }
 req.user=user;
        next();
    } catch (error) {
        res.status(401).json({
            message:'Unauthorized',
            error:error.message
        })
    }
}