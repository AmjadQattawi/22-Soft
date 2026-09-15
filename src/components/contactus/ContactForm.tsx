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

const COUNTRIES = [
  { code: "+962", flag: "🇯🇴", placeholder: "79 123 4567", maxLength: 9 },
  { code: "+966", flag: "🇸🇦", placeholder: "50 123 4567", maxLength: 9 },
  { code: "+970", flag: "🇵🇸", placeholder: "59 123 4567", maxLength: 9 },
  { code: "+964", flag: "🇮🇶", placeholder: "750 123 4567", maxLength: 10 },
  { code: "+971", flag: "🇦🇪", placeholder: "50 123 4567", maxLength: 9 },
  { code: "+974", flag: "🇶🇦", placeholder: "3312 3456", maxLength: 8 },
  { code: "+965", flag: "🇰🇼", placeholder: "5123 4567", maxLength: 8 },
  { code: "+973", flag: "🇧🇭", placeholder: "3600 0000", maxLength: 8 },
  { code: "+968", flag: "🇴🇲", placeholder: "9212 3456", maxLength: 8 },
  { code: "+212", flag: "🇲🇦", placeholder: "612 345 678", maxLength: 9 },
  { code: "+1", flag: "🇺🇸", placeholder: "202 555 0123", maxLength: 10 },
];

export default function ContactForm({
  setSubmitted,
  formData,
  setFormData,
}: ContactFormProps) {
  const [errorsValidation, setErrorsValidation] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedCountry =
    COUNTRIES.find((c) => c.code === formData.countryCode) ?? COUNTRIES[0];

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
          result.message || "Failed to send your message. Please try again."
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
      {/* Row: Name and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Full Name <span className="text-[#f97316]">*</span>
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
            <p className="text-red-400 text-sm">{errorsValidation.fullName}</p>
          )}
        </div>

        {/* Phone with Country Selector */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Mobile / WhatsApp <span className="text-[#f97316]">*</span>
          </label>
          <div className="flex overflow-hidden rounded-xl border border-white bg-[#18395b] transition focus-within:border-[#f97316] focus-within:ring-1 focus-within:ring-[#f97316]">
            <select
              value={formData.countryCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  countryCode: e.target.value,
                })
              }
              className="bg-[#18395b] text-white border-r border-slate-600 px-3 py-4 text-sm outline-none cursor-pointer"
            >
              {COUNTRIES.map((country) => (
                <option
                  key={country.code}
                  value={country.code}
                  className="bg-[#18395b] text-white"
                >
                  {country.flag} {country.code}
                </option>
              ))}
            </select>

            <input
              required
              type="tel"
              placeholder={selectedCountry.placeholder}
              maxLength={selectedCountry.maxLength}
              value={formData.phone}
              onChange={(e) => {
                const phone = e.target.value.replace(/\D/g, "");
                setFormData({ ...formData, phone });
              }}
              className="w-full bg-transparent px-4 py-4 text-white placeholder-slate-400 text-base outline-none"
            />
          </div>
          {errorsValidation.phone && (
            <p className="text-red-400 text-sm">{errorsValidation.phone}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-200">
          Your Message <span className="text-[#f97316]">*</span>
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
          <p className="text-red-400 text-sm">{errorsValidation.message}</p>
        )}
      </div>

      {/* Submit button & Error notice */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#c94f00] hover:bg-[#ea580c] text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-3 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>{isLoading ? "Sending..." : "Send Message"}</span>
          {!isLoading && <span className="text-lg">→</span>}
        </button>

        {submitError && (
          <p className="mt-3 text-sm text-red-400 font-medium">{submitError}</p>
        )}
      </div>
    </form>
  );
}