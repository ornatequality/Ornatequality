# Gmail SMTP Setup (Form Emails)

Form data saves to **MongoDB** (`ornatequality` → `formsubmissions`).

## Email recipients

| Form | Recipient env var | Default |
|------|---------------------|---------|
| Contact page, ads, callback | `FORM_NOTIFY_EMAIL` | chetan@ornatequality.com |
| **Consultation popup** | `CONSULTATION_POPUP_NOTIFY_EMAIL` | marketing@ornatequality.com |

SMTP sender (`SMTP_USER`) stays the same for all forms — only the **to** address changes for the popup.

## Environment variables

```env
# Other forms (contact page, ads, callback)
FORM_NOTIFY_EMAIL=chetan@ornatequality.com

# Consultation popup only
CONSULTATION_POPUP_NOTIFY_EMAIL=marketing@ornatequality.com

# SMTP sender (Gmail App Password account)
SMTP_USER=your-sender@gmail.com
SMTP_PASS=your-app-password
```

Optional:

```env
SMTP_FROM="Ornate Quality" <your-sender@gmail.com>
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
```

## Enable / update email

1. Google Account → Security → **2-Step Verification** ON
2. **App passwords** → create for Mail
3. Add variables to `.env.local` (spaces in password OK — code removes them)
4. Restart: `npm run dev`

For **chetan@ornatequality.com** as sender, generate the App Password while logged into that Google Workspace account.

## Production (Vercel / hosting)

Add the same variables in your hosting dashboard:

- `CONSULTATION_POPUP_NOTIFY_EMAIL=marketing@ornatequality.com`
- `FORM_NOTIFY_EMAIL=chetan@ornatequality.com`
- `MONGODB_URI`, `SMTP_USER`, `SMTP_PASS`

Redeploy after saving env vars.

## Speed

Form submit saves to DB first and returns immediately. Email sends in the background.

## Test checklist

1. Submit **consultation popup** → email arrives at **marketing@ornatequality.com**
2. Submit **contact page** form → email arrives at **FORM_NOTIFY_EMAIL** only
3. Check MongoDB `formsubmissions` for `source: "consultation-popup"`
