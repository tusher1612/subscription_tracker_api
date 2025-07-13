import mongoose from "mongoose";

const subscriptionSchema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Subscription name is required'],
    trim:true,
    minLength:2,
    maxLength:100, 
  },
price:{
  type:Number,
  required:[true,"Subscription price is required"],
  min:[0,'Price should be greater than 0']
},
currency:{
  type:String,
  enum:["USD",'BDT','EUR','GBP'],
  default:'USD'
},
frequency:{
  type:String,
  enum:['Daily','Weekly','Monthly', 'Yearly']
},
category:{
  type:String,
  enum:['sports','news','entertainment','lifestyle','technology','finance','politics','others'],
  required:true,
},
paymentMethod:{
  type:String,
  required:true,
  trim:true
},
status:{
  type:String,
  enum:['active','cancel','expired'],
  default:'active'

}




},{timestamps:true})


const Subscription=mongoose.model("Subscription",subscriptionSchema);

export default Subscription;