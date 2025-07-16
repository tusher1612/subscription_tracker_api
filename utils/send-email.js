
import dayjs from "dayjs";
import { emailTemplates } from "./email-templates.js";
import { gmail_account, transporter } from "../config/nodemailer.js";

export const sendReminderEmail= async(to,type,subscription)=>{
    if(!to && ! type) throw new Error("Missing required parameters");
    const template = emailTemplates.find(template => template.label.trim() === type.trim());
    if(!template) throw new Error("Invalid email");

    const mailInfo={
 userName:subscription.user.name,
  subscriptionName:subscription.name,
  renewalDate:dayjs(subscription.renewalDate).format('MMM D : YYYY'),
   planName: subscription.frequency,
  price:`${subscription.currency} ${subscription.price}  ${subscription.frequency}`,
  paymentMethod:subscription.paymentMethod
    }

 const subject=template.generateSubject(mailInfo);
 const message=template.generateBody(mailInfo);


const mailOptions={
    from:gmail_account,
     to:to,
     subject:subject,
     html:message
} 

transporter.sendMail(mailOptions,(error,info)=>{
  if(error){
return console.log(error,"Error sending email")
  }
  else {
     return console.log(info.response, ` Email sent to ${mailOptions.to} successfully`)
  }
 
});


}