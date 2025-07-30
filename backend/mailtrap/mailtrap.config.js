// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({
//   path: path.resolve(process.cwd(), ".env"),
// });

// export const mailtrapClient = new MailtrapClient({
// 	endpoint: process.env.MAILTRAP_ENDPOINT,
// 	token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
// 	email: "aofza1508@gmail.com",
// 	name: "ธนกฤต เพ็ชรนก",
// };



// src/config/email.config.ts
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import path from "path";
dotenv.config({
   path: path.resolve(process.cwd(), ".env"),
 });

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});
