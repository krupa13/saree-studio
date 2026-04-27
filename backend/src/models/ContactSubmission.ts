import mongoose, { type InferSchemaType } from "mongoose";

const { Schema } = mongoose;

const contactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export type ContactSubmissionDocument = InferSchemaType<typeof contactSubmissionSchema>;

export const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model<ContactSubmissionDocument>("ContactSubmission", contactSubmissionSchema);
