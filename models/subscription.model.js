import mongoose from "mongoose";
import User from "./users.model.js";

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

},
startDate:{
  type:Date,
  required:true,
  validate:{
    validator:(value)=>value <= new Date,
    message:"Start date  must  be  in the past"
  }
},
renewalDate:{
  type:Date,
  validate:{
    validator:function(value) {
      return value >this.startDate
    },
    message:"Renewal date must be after start date"
  }
},

user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:User,
  required:true,
  index:true
}},{timestamps:true});

//mongoose middleware hook to validate or compute something before saving


subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      Daily: 1,
      Weekly: 7,
      Monthly: 30,
      Yearly: 365,
    };

    const periodDays = renewalPeriods[this.frequency];
    if (!periodDays) {
      return next(new Error('Invalid subscription frequency'));
    }

    const startDate = new Date(this.startDate);
    const renewalDate = new Date(startDate);
    renewalDate.setDate(startDate.getDate() + periodDays);

    this.renewalDate = renewalDate;
  }

  if (this.renewalDate < new Date()) {
    this.status = 'expired';
  }

  next();
});



const Subscription=mongoose.model("Subscription",subscriptionSchema);

export default Subscription;