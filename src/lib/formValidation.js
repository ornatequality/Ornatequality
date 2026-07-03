const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_10_REGEX = /^[6-9]\d{9}$/;

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateEmail(email, errors, field = "email") {
  if (!email) {
    errors[field] = "Email is required.";
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    errors[field] = "Please enter a valid email address.";
  }
}

function validateName(name, errors) {
  if (!name) {
    errors.name = "Name is required.";
    return;
  }
  if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
}

function validateMessage(message, errors) {
  if (!message) {
    errors.message = "Message is required.";
    return;
  }
  if (message.length < 5) {
    errors.message = "Message must be at least 5 characters.";
  }
}

export function validateContactForm(body) {
  const errors = {};
  const name = cleanText(body?.name);
  const email = cleanText(body?.email).toLowerCase();
  const phone = cleanText(body?.phone).replace(/\s+/g, "");
  const city = cleanText(body?.city);
  const message = cleanText(body?.message);

  validateName(name, errors);
  validateEmail(email, errors);

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d{7,15}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!city) {
    errors.city = "City is required.";
  }

  validateMessage(message, errors);

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    data: { name, email, phone, city, message },
  };
}

export function validateCallbackForm(body) {
  const errors = {};
  const name = cleanText(body?.name);
  const email = cleanText(body?.email).toLowerCase();
  const phone = cleanText(body?.phone).replace(/\s+/g, "");
  const message = cleanText(body?.message);

  validateName(name, errors);
  validateEmail(email, errors);

  if (!phone) {
    errors.phone = "Mobile number is required.";
  } else if (!MOBILE_10_REGEX.test(phone)) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  validateMessage(message, errors);

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    data: { name, email, phone, message },
  };
}
