import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";



//SignUp
export const signUp= async(req,res,next)=>{
    const session=await mongoose.startSession();
      session.startTransaction()
     try {
 const {name,email,password}=req.body;

    const existingUser=await User.findOne({email});
    if (existingUser){
      const  error =new Error("User already exist");
        error.statusCode=409;
        throw error;
    }

    const salt=  await  bcrypt.genSalt(10);
    const hashPassword= await bcrypt.hash(password,salt)
    const newUsers=await User.create([{name,email,password:hashPassword}],{session})
    const token= jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})
     session.commitTransaction();
    
        res.status(201).json({
                success:true,
                message:"User created successfully",
                data:{
            token,
            user:newUsers[0]
                }
            })
  } catch (error) {
await session.abortTransaction();
next(error);
  }
  finally {
         session.endSession();
  }
}


//SignIn
export const signIn= async(req,res,next)=>{

   try {
    const {email,password}=req.body;
    const existingUser=await User.findOne({email});
    if (!existingUser){
        const error=new Error('User not found');
        error.statusCode=404;
        throw error;
    }
const validPassword= await  bcrypt.compare(password,existingUser.password)
   if (!validPassword){
     const error=new Error('Invalid password');
        error.statusCode=401;
        throw error;

   }
const token = jwt.sign({userId:existingUser._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

res.status(200).json({
    success:true,
    message:"User sign in successfully",
    data: {
    token,
     existingUser}
})

   } catch (error) {
    next(error)
    
   } 
}


//SignUp
export const signOut= async(req,res,next)=>{

console.log("SignIn",req,res,next)
}
