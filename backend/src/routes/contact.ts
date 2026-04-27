import { Router } from "express";
import { z } from "zod";
import { ContactSubmission } from "../models/ContactSubmission.js";
import { sendContactNotification } from "../services/mail.js";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().min(7).max(25),
  message: z.string().min(10).max(3000)
});

router.post("/", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Please provide a valid name, email, phone, and message.",
      issues: parsed.error.flatten().fieldErrors
    });
  }

  try {
    const submission = await ContactSubmission.create(parsed.data);
    await sendContactNotification({
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      message: submission.message,
      createdAt: submission.createdAt
    });

    return res.status(201).json({ message: "Contact submission received." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return res.status(500).json({ message: "Could not process the contact submission." });
  }
});

export { router as contactRouter };
