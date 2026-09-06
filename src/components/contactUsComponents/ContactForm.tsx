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
  const [errorsValidation, setErrorsValidation] = useState<ContactFormErrors>(
    {},
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = ContactFormValidation(formData);
    setErrorsValidation(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    localStorage.removeItem("formData");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* row 1: Name and name of the shop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Full Name <span className="text-[#f97316]">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border text-white border-white  text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />
          {errorsValidation.fullName && (
            <p className="text-red-400 text-sm">{errorsValidation.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Showroom / Company Name <span className="text-[#f97316]">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />
          {errorsValidation.businessName && (
            <p className="text-red-400 text-sm">
              {errorsValidation.businessName}
            </p>
          )}
        </div>
      </div>

      {/* row 2: Phone and email*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Mobile / WhatsApp <span className="text-[#f97316]">*</span>
          </label>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />
          {errorsValidation.phone && (
            <p className="text-red-400 text-sm">{errorsValidation.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Business Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />
          {errorsValidation.email && (
            <p className="text-red-400 text-sm">{errorsValidation.email}</p>
          )}
        </div>
      </div>

      {/* row 3: Activity type and city*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Operation Sector
          </label>
          <select
            value={formData.businessType}
            onChange={(e) =>
              setFormData({ ...formData, businessType: e.target.value })
            }
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          >
            <option value="retail">Retail Showroom (معرض مفرق)</option>
            <option value="workshop">Goldsmith & Workshop (مشغل صياغة)</option>
            <option value="wholesale">
              Bullion & Wholesale (تجارة جملة وسبائك)
            </option>
            <option value="all">Integrated Enterprise (شامل)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            City / Country
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
          />
          {errorsValidation.city && (
            <p className="text-red-400 text-sm">{errorsValidation.city}</p>
          )}
        </div>
      </div>

      {/* row 4: The large message field (textarea) */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-200">
          Your Message / Requirements
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your current workflow, number of workstations, or specific questions..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition resize-none"
        />
        {errorsValidation.message && (
          <p className="text-red-400 text-sm">{errorsValidation.message}</p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#e26b16] hover:bg-[#f27a24] text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-3"
        >
          <span>Contact Us</span>
          <span className="text-lg">→</span>
        </button>
      </div>
    </form>
  );
}
