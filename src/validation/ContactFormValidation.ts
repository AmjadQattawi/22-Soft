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
  const phoneLengths: Record<string, number> = {
    "+962": 9, // Jordan
    "+966": 9, // Saudi Arabia
    "+970": 9, // Palestine
    "+964": 10, // Iraq
    "+971": 9, // UAE
    "+974": 8, // Qatar
    "+965": 8, // Kuwait
    "+973": 8, // Bahrain
    "+968": 8, // Oman
    "+212": 9, // Morocco
    "+1": 10, // USA
  };

  const phone = formData.phone.trim();
  const requiredLength = phoneLengths[formData.countryCode];

  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d+$/.test(phone)) {
    errors.phone = "Phone number must contain numbers only";
  } else if (requiredLength && phone.length !== requiredLength) {
    errors.phone = `Phone number must be ${requiredLength} digits`;
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
