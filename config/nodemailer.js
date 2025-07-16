
import nodemailer from 'nodemailer';
import { NODE_MAILER_PASSWORD } from './env.js';

export const gmail_account='tusher1612@gmail.com'
export const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:gmail_account,
        pass:NODE_MAILER_PASSWORD,

    }
})

