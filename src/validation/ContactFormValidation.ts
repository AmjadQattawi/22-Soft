
//npm install libphonenumber-js : Library   handle international telephone numbers
import {
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";

const countryMap: Record<string, CountryCode> = {
  "+962": "JO",
  "+966": "SA",
  "+970": "PS",
  "+964": "IQ",
  "+971": "AE",
  "+974": "QA",
  "+965": "KW",
  "+973": "BH",
  "+968": "OM",
  "+212": "MA",
  "+1": "US",
};

export interface ValidationFormData {
  fullName: string;
  phone: string;
  message: string;
  countryCode: string;
  email?: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactFormValidation(
  formData: ValidationFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Full Name
  const trimmedName = formData.fullName.trim();

  if (!trimmedName) {
    errors.fullName = "Full name is required";
  } else if (trimmedName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters";
  } else if (trimmedName.length > 50) {
    errors.fullName = "Full name must not exceed 50 characters";
  }

  // Email - Optional
  const trimmedEmail = formData.email?.trim();

  if (trimmedEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Invalid email address";
    }
  }
 
// Phone
const phone = formData.phone.trim();
const country = countryMap[formData.countryCode];

if (!phone) {
  errors.phone = "Phone number is required";
} else if (!country) {
  errors.phone = "Invalid country";
} else {
  const phoneNumber = parsePhoneNumberFromString(phone, country);

  if (!phoneNumber || !phoneNumber.isValid()) {
    errors.phone = "Invalid phone number";
  }
}
  // Message
  const trimmedMessage = formData.message.trim();

  if (trimmedMessage && trimmedMessage.length < 5) {
    errors.message = "Please provide more details (at least 5 characters)";
  } else if (trimmedMessage.length > 1000) {
    errors.message = "Message is too long";
  }

  return errors;
}
