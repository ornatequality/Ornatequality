import { after } from "next/server";
import connectDB from "@/lib/mongodb";
import FormSubmission from "@/models/FormSubmission";
import { sendFormEmail } from "@/lib/mail";

function buildEmailSubject(formType, data) {
  if (data.source === "consultation-popup") {
    return "New Expert Consultation Popup - Ornate Quality";
  }

  const label = formType === "contact" ? "Contact Form" : "Callback Request";
  const parts = ["New", label, "- Ornate Quality"];

  if (data.source) {
    parts.splice(2, 0, `(${data.source})`);
  }

  return parts.join(" ");
}

export async function saveFormSubmission(formType, data) {
  await connectDB();

  const submission = await FormSubmission.create({
    formType,
    source: data.source || "",
    service: data.service || "",
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city || "",
    message: data.message,
  });

  const emailPayload = {
    subject: buildEmailSubject(formType, data),
    formType,
    fields: data,
  };

  after(async () => {
    try {
      const emailResult = await sendFormEmail(emailPayload);
      if (!emailResult?.sent) {
        console.error(
          `Form saved to DB (${submission._id}) but email failed:`,
          emailResult?.reason ?? "unknown"
        );
      }
    } catch (error) {
      console.error(`Form saved to DB (${submission._id}) but email error:`, error);
    }
  });

  return { submission, emailSent: true };
}
