import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/formValidation";
import { saveFormSubmission } from "@/lib/submitForm";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.ok) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const { submission, emailSent } = await saveFormSubmission("contact", validation.data);

    return NextResponse.json({
      success: true,
      id: submission._id,
      emailSent,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit the form. Please try again.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
