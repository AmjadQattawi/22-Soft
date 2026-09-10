import type { IFormData } from "../components/contactus/ContactUs";

export interface ContactFormErrors {
  fullName?: string;
  phone?: string;
  message?: string;
}

export function ContactFormValidation(formData: IFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // fullName
  const trimmedName = formData.fullName.trim();
  if (!trimmedName) {
    errors.fullName = "Full name is required";
  } else if (trimmedName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters";
  } else if (trimmedName.length > 50) {
    errors.fullName = "Full name must not exceed 50 characters";
  }

  // phone
  const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone.trim())) {
    errors.phone = "Invalid phone number";
  }

  // message (optional check)
  const trimmedMessage = formData.message.trim();
  if (trimmedMessage && trimmedMessage.length < 5) {
    errors.message = "Please provide more details (at least 5 characters)";
  } else if (trimmedMessage.length > 1000) {
    errors.message = "Message is too long";
  }

  return errors;
}
