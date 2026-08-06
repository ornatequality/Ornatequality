import nodemailer from "nodemailer";

function getEnv(name) {
  const value = process.env[name];
  if (!value) return "";
  return value.replace(/^["']|["']$/g, "").trim();
}

function getNotifyEmail() {
  return getEnv("FORM_NOTIFY_EMAIL") || getEnv("NOTIFY_EMAIL") || "chetan@ornatequality.com";
}

function getConsultationPopupNotifyEmail() {
  return getEnv("CONSULTATION_POPUP_NOTIFY_EMAIL") || "marketing@ornatequality.com";
}

function resolveNotifyEmail(fields) {
  if (fields?.source === "consultation-popup") {
    return getConsultationPopupNotifyEmail();
  }
  return getNotifyEmail();
}

const PLACEHOLDER_PASSWORDS = new Set([
  "YOUR_GMAIL_APP_PASSWORD",
  "your-app-password",
  "your_gmail_app_password",
]);

const FORM_LABELS = {
  contact: "Contact Form",
  callback: "Callback / Request Call Form",
};

let cachedTransporter = null;
let cachedTransporterKey = "";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(formType, fields) {
  const label = FORM_LABELS[formType] || "Form Submission";
  const rows = [
    ["Form Type", label],
    ...(fields.source ? [["Page / Source", fields.source]] : []),
    ...(fields.service ? [["Service", fields.service]] : []),
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ...(fields.city ? [["City", fields.city]] : []),
    ["Message", fields.message],
  ];

  const body = rows
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;">${escapeHtml(key)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2 style="margin:0 0 12px;">New Website Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${body}</table>
    </div>
  `;
}

function createTransporter(user, pass) {
  const host = getEnv("SMTP_HOST");
  const port = Number(getEnv("SMTP_PORT") || 0);
  const secure = getEnv("SMTP_SECURE") === "true";

  if (host) {
    return nodemailer.createTransport({
      host,
      port: port || (secure ? 465 : 587),
      secure,
      requireTLS: !secure,
      auth: { user, pass },
      pool: true,
      maxConnections: 1,
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    pool: true,
    maxConnections: 1,
  });
}

function getTransporter(user, pass) {
  const key = `${user}:${pass}`;
  if (cachedTransporter && cachedTransporterKey === key) {
    return cachedTransporter;
  }

  cachedTransporter = createTransporter(user, pass);
  cachedTransporterKey = key;
  return cachedTransporter;
}

export async function sendFormEmail({ subject, formType, fields }) {
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS").replace(/\s+/g, "");
  const notifyEmail = resolveNotifyEmail(fields);

  if (!user || !pass) {
    console.error("Form email skipped: SMTP_USER or SMTP_PASS missing in .env.local");
    return { sent: false, reason: "smtp_not_configured" };
  }

  if (PLACEHOLDER_PASSWORDS.has(pass)) {
    console.error("Form email skipped: SMTP_PASS is still a placeholder in .env.local");
    return { sent: false, reason: "smtp_placeholder_password" };
  }

  try {
    const transporter = getTransporter(user, pass);
    const from = getEnv("SMTP_FROM") || `"Ornate Quality" <${user}>`;

    const info = await transporter.sendMail({
      
      from,
      to: notifyEmail,
      replyTo: fields.email,
      subject,
      html: buildEmailHtml(formType, fields),
      text: [
        `New ${formType} form submission`,
        fields.source ? `Source: ${fields.source}` : null,
        fields.service ? `Service: ${fields.service}` : null,
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        fields.city ? `City: ${fields.city}` : null,
        `Message: ${fields.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    console.log("Form email sent:", info.messageId, "→", notifyEmail);
    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "email_failed",
    };
  }
}
