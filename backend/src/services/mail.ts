import nodemailer from "nodemailer";
import { buildContactEmail } from "../utils/emailTemplate.js";

type SendContactEmailInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
};

export async function sendContactNotification(input: SendContactEmailInput) {
  const gmailUser = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL;
  const boutiqueName = process.env.BOUTIQUE_NAME || "Saree Studio";

  if (!gmailUser || !appPassword || !ownerEmail) {
    throw new Error("GMAIL_USER, GMAIL_APP_PASSWORD, and OWNER_EMAIL are required");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: appPassword
    }
  });

  await transporter.sendMail({
    from: `"${boutiqueName}" <${gmailUser}>`,
    to: ownerEmail,
    replyTo: input.email,
    subject: `New enquiry from ${input.name}`,
    html: buildContactEmail({ boutiqueName, ...input })
  });
}
