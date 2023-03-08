import nodeMailer from "nodemailer";
import asyncHandler from "express-async-handler";
// import dotenv from "dotenv";
// dotenv.config();

// const testAccount = await nodeMailer.createTestAccount();

const tranporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "abhijithmk638@gmail.com",
    pass: "injfwnaahmklxmlb",
  },
});

export const sendEmail = asyncHandler(async (email, message) => {
  const info = await tranporter.sendMail({
    from: "abhijithmk638@gmail.com",
    to: email,
    subject: "GST Payment status",
    text: message,
  });
});
