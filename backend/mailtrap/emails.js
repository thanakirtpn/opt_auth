import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { transporter } from './mailtrap.config.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent via Gmail");
  } catch (error) {
    console.error("Failed to send verification email", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Welcome to our App!",
    html: `<p>Hi ${name},</p><p>Welcome to our platform. We're excited to have you!</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent via Gmail");
  } catch (error) {
    console.error("Failed to send welcome email", error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent via Gmail");
  } catch (error) {
    console.error("Failed to send password reset email", error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset success email sent via Gmail");
  } catch (error) {
    console.error("Failed to send password reset success email", error);
    throw new Error(`Error sending password reset success email: ${error.message}`);
  }
};
