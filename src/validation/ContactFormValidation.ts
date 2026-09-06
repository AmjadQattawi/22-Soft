import type { IFormData } from "../components/contactUsComponents/ContactUs";

export interface ContactFormErrors {
  fullName?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  city?: string;
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

  // businessName
  const trimmedBusiness = formData.businessName.trim();
  if (!trimmedBusiness) {
    errors.businessName = "Business name is required";
  } else if (trimmedBusiness.length < 2) {
    errors.businessName = "Business name is too short";
  } else if (trimmedBusiness.length > 100) {
    errors.businessName = "Business name is too long";
  }

  // phone
  const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone.trim())) {
    errors.phone = "Invalid phone number";
  }

  // email (optional check)
  if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Invalid email address";
  }

  // city (optional check)
  if (formData.city && formData.city.length > 100) {
    errors.city = "City name is too long";
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