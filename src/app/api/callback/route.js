import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FormSubmission from "@/models/FormSubmission";
import { validateCallbackForm } from "@/lib/formValidation";
import { sendFormEmail } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = validateCallbackForm(body);

    if (!validation.ok) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    await connectDB();

    const submission = await FormSubmission.create({
      formType: "callback",
      ...validation.data,
    });

    const emailResult = await sendFormEmail({
      subject: "New Callback Request - Ornate Quality",
      formType: "callback",
      fields: validation.data,
    });

    return NextResponse.json({
      success: true,
      id: submission._id,
      emailSent: emailResult.sent,
    });
  } catch (error) {
    console.error("Callback form error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit the form. Please try again.";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
