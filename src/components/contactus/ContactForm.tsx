import { useState } from "react";
import type { IFormData } from "./ContactUs";
import {
  ContactFormValidation,
  type ContactFormErrors,
} from "../../validation/ContactFormValidation";

interface ContactFormProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

export default function ContactForm({
  setSubmitted,
  formData,
  setFormData,
}: ContactFormProps) {
  const [errorsValidation, setErrorsValidation] =
    useState<ContactFormErrors>({});

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = ContactFormValidation(formData);
    setErrorsValidation(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.removeItem("formData");
        setSubmitted(true);
      } else {
        setSubmitError(
          result.message || "Failed to send your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Failed to send message:", error);

      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Full Name
          </label>

          <input
            required
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#18395b] border border-white text-white placeholder-slate-400 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />

          {errorsValidation.fullName && (
            <p className="text-red-400 text-sm">
              {errorsValidation.fullName}
            </p>
          )}
        </div>

        {/* Mobile / WhatsApp */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Mobile / WhatsApp
          </label>

          <input
            required
            type="tel"
            placeholder="+962 7X XXX XXXX"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#18395b] border border-white text-white placeholder-slate-400 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />

          {errorsValidation.phone && (
            <p className="text-red-400 text-sm">
              {errorsValidation.phone}
            </p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-200">
          Your Message
        </label>

        <textarea
          rows={5}
          required
          placeholder="How can we help you with 22-Gold DX?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-5 py-4 rounded-xl bg-[#18395b] border border-white text-white placeholder-slate-400 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition resize-none"
        />

        {errorsValidation.message && (
          <p className="text-red-400 text-sm">
            {errorsValidation.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-3 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{isLoading ? "Sending..." : "Send Message"}</span>

          {!isLoading && <span className="text-lg">→</span>}
        </button>

        {submitError && (
          <p className="mt-3 text-sm text-red-400">
            {submitError}
          </p>
        )}
      </div>
    </form>
  );
}