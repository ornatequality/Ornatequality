import nodemailer from "nodemailer";

function getEnv(name) {
  const value = process.env[name];
  if (!value) return "";
  return value.replace(/^["']|["']$/g, "").trim();
}

const NOTIFY_EMAIL =
  getEnv("FORM_NOTIFY_EMAIL") || getEnv("NOTIFY_EMAIL") || "ritiksharmaornate@gmail.com";

const PLACEHOLDER_PASSWORDS = new Set([
  "YOUR_GMAIL_APP_PASSWORD",
  "your-app-password",
  "your_gmail_app_password",
]);

function buildEmailHtml(formType, fields) {
  const label = formType === "contact" ? "Contact Form" : "Callback Form";
  const rows = [
    ["Form", label],
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ...(fields.city ? [["City", fields.city]] : []),
    ["Message", fields.message],
  ];

  const body = rows
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;">${key}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2 style="margin:0 0 12px;">New ${label} Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${body}</table>
    </div>
  `;
}

function createGmailTransporter(user, pass) {
  return nodemailer.createTransport({
    host: getEnv("SMTP_HOST") || "smtp.gmail.com",
    port: Number(getEnv("SMTP_PORT") || 587),
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  });
}

export async function sendFormEmail({ subject, formType, fields }) {
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS").replace(/\s+/g, "");

  if (!user || !pass) {
    console.warn("SMTP_USER or SMTP_PASS missing in .env.local — email skipped.");
    return { sent: false, reason: "smtp_not_configured" };
  }

  if (PLACEHOLDER_PASSWORDS.has(pass)) {
    console.warn(
      "SMTP_PASS is still a placeholder. Set a real Gmail App Password in .env.local"
    );
    return { sent: false, reason: "smtp_placeholder_password" };
  }

  try {
    const transporter = createGmailTransporter(user, pass);
    await transporter.verify();

    const from = getEnv("SMTP_FROM") || `"Ornate Quality" <${user}>`;

    const info = await transporter.sendMail({
      from,
      to: NOTIFY_EMAIL,
      replyTo: fields.email,
      subject,
      html: buildEmailHtml(formType, fields),
      text: [
        `New ${formType} form submission`,
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        fields.city ? `City: ${fields.city}` : null,
        `Message: ${fields.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    console.log("Form email sent:", info.messageId, "→", NOTIFY_EMAIL);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "email_failed",
    };
  }
}
