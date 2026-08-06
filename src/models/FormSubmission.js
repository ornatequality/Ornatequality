import mongoose from "mongoose";

const FormSubmissionSchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      enum: ["contact", "callback"],
      required: true,
    },
    source: { type: String, trim: true, default: "" },
    service: { type: String, trim: true, default: "" },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.FormSubmission ||
  mongoose.model("FormSubmission", FormSubmissionSchema);
