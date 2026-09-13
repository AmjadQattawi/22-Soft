import { useEffect, useState } from "react";
import {
  ContactFormValidation,
  type ContactFormErrors,
} from "../../../validation/ContactFormValidation";
import {
  initialFormData,
  type DemoFormData,
} from "./demoFormData";

import { countries } from "./demoCountries";
 
interface DemoFormProps {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

 
export default function DemoForm({ submitted, setSubmitted }: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch {
        return initialFormData;
      }
    }
    return initialFormData;
  });

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, submitted]);

  const [isLoading, setIsLoading] = useState(false);

  // Errors in submitting the form to the server  (API)
  const [submitError, setSubmitError] = useState("");

  //validationErrors
  const [validationErrors, setvalidationErrors] = useState<ContactFormErrors>(
    {},
  );
 

  // Meaning  of ?? : If the value on the left is null or undefined, use the value on the right.
  const selectedCountry =
    countries.find((country) => country.code === formData.countryCode) ??
    countries[0];

  // handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = ContactFormValidation(formData);
    if (Object.keys(validationErrors).length > 0) {
      setvalidationErrors(validationErrors);
      return;
    }
    setvalidationErrors({});
    setIsLoading(true);
    setSubmitError("");
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",

        headers: {
          //This means we send data to the server.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      // We take the server's response
      const result = await response.json();

      if (result.success) {
        localStorage.removeItem("formData");
        setSubmitted(true);
      } else {
        // If the server responded but the operation failed يعني الرد ما وصل
        setSubmitError(
          result.message || "Failed to send demo request. Please try again.",
        );
      }
    } catch (error) {
      // Error such as server is down or connection problem
      console.error("Demo request failed:", error);
      setSubmitError(
        "server is down or connection problem, Please try again. ",
      );
    } finally {
      setIsLoading(false);
      setFormData(initialFormData);
    }
  };

  // =========================================================
  // FORM
  // =========================================================

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#18395b]">
            Full Name
          </label>

          <input
            required
            type="text"
            placeholder="Your name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-orange-100"
          />

          {validationErrors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {validationErrors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#18395b]">
            Email (Optional)
          </label>
          <input
            type="email"
            placeholder="name@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-orange-100"
          />

          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-500">
              {validationErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#18395b]">
          Mobile / WhatsApp
        </label>

        <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white transition focus-within:border-[#f97316] focus-within:ring-2 focus-within:ring-orange-100">
          {/* Country Code */}
          <select
            value={formData.countryCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                countryCode: e.target.value,
              })
            }
            className="border-r border-slate-300 bg-white px-3 py-3 text-sm outline-none"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>

          {/* Phone Number */}
          <input
            type="tel"
            placeholder={selectedCountry.placeholder}
            maxLength={selectedCountry.maxLength}
            value={formData.phone}
            onChange={(e) => {
              // Allow numbers only
              const phone = e.target.value.replace(/\D/g, "");

              setFormData({
                ...formData,
                phone,
              });
            }}
            className="w-full bg-transparent px-4 py-3 text-sm outline-none"
          />
        </div>

        {validationErrors.phone && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#18395b]">
          Message
        </label>

        <textarea
          rows={4}
          placeholder="Tell us what you would like to see in the demo..."
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-orange-100"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full rounded-xl bg-[#f97316] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isLoading ? "Sending..." : "Request Your Demo"}
      </button>

      {/* Error */}
      {submitError && <p className="text-sm text-red-500">{submitError}</p>}
    </form>
  );
}
