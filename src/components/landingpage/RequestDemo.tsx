import { useState } from "react";

import LaptopMockup from "../../assets/mockup/DesktopApp.png";
import MobileMockup from "../../assets/mockup/MobileApp.png";
import mobilePos from "../../assets/mobile/mobile-pos.jpg";

interface DemoFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function RequestDemo() {
  // =========================================================
  // FORM STATE
  // =========================================================

  const [formData, setFormData] = useState<DemoFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitError("");

    // Build one message that is compatible
    // with the current contact backend
    const message = `
22-Gold DX Demo Request

Email: ${formData.email}

Customer Message:
${formData.message}
    `;

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // Existing backend expects:
        // fullName + phone + message
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitError(
          result.message || "Failed to send demo request. Please try again.",
        );
      }
    } catch (error) {
      console.error("Demo request failed:", error);

      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // =========================================================
  // COMPONENT
  // =========================================================

  return (
    <section
      id="request-demo"
      className="bg-linear-to-b from-white via-orange-50/20 to-white "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            MAIN CARD
        ====================================================== */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid items-stretch lg:grid-cols-2">
            {/* =================================================
                PRODUCT VISUAL
            ================================================== */}
            <div className="relative m-3 flex min-h-[540px] items-center justify-center overflow-hidden rounded-2xl p-10 lg:p-14">
              {/* Main gradient background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#102b46] via-[#18395b] to-[#234974]" />

              {/* Orange glow */}
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

              {/* Blue glow */}
              <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

              {/* Decorative soft grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Small product label */}
              <div className="absolute left-7 top-7 z-20 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  22-Gold DX
                </span>
              </div>

              {/* ===============================================
                  DEVICE COMPOSITION
              ================================================ */}
              <div className="relative z-10 w-full max-w-xl py-10">
                {/* Laptop - Main Device */}
                <img
                  src={LaptopMockup}
                  alt="22-Gold DX Desktop Application"
                  className="relative z-10 w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.38)]"
                />

                {/* POS Mobile - Left / Higher */}
                <div className="absolute -left-1 bottom-15 z-20 w-[22%] max-w-32 transition-transform duration-300 hover:-translate-y-2">
                  {/* Custom mobile frame */}
                  <div className="relative rounded-[22px] border-[5px] border-slate-950 bg-slate-950 p-[2px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    {/* Speaker */}
                    <div className="absolute left-1/2 top-[6px] z-30 h-[3px] w-7 -translate-x-1/2 rounded-full bg-slate-600" />

                    {/* POS screenshot */}
                    <img
                      src={mobilePos}
                      alt="22-Gold DX Mobile POS"
                      className="aspect-[9/18] w-full rounded-[15px] object-cover object-top"
                    />
                  </div>
                </div>

                {/* Main Mobile App - Right / Lower */}
                <img
                  src={MobileMockup}
                  alt="22-Gold DX Mobile Application"
                  className="absolute -bottom-4 right-1 z-20 w-[25%] max-w-36 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2"
                />
              </div>
            </div>

            {/* =================================================
                DEMO FORM
            ================================================== */}
            <div className="flex items-center p-8 sm:p-10 lg:px-14 lg:py-3">
              <div className="w-full">
                {!submitted ? (
                  <>
                    {/* Form heading */}
                    {/* <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
                      Request a Demo
                    </span> */}

                    {/* <h2 className="mt-3 text-3xl font-extrabold text-[#18395b] sm:text-4xl">
                      See 22-Gold DX in Action
                    </h2> */}



                    {/* ===========================================
                        FORM FIELDS
                    ============================================ */}
                    <form onSubmit={handleSubmit} className=" space-y-5">
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
                        </div>

                        {/* Email */}
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-[#18395b]">
                            Email
                          </label>

                          <input
                            required
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
                        </div>
                      </div>

                      {/* Mobile / WhatsApp */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#18395b]">
                          Mobile / WhatsApp
                        </label>

                        <input
                          required
                          type="tel"
                          placeholder="+962 7X XXX XXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-orange-100"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-[#18395b]">
                          Message
                        </label>

                        <textarea
                          rows={4}
                          required
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

                      {/* ===========================================
                          SUBMIT BUTTON
                      ============================================ */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-2 w-full rounded-xl bg-[#f97316] px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-[#ea580c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        {isLoading ? "Sending..." : "Request Your Demo"}
                      </button>

                      {/* Submit Error */}
                      {submitError && (
                        <p className="text-sm text-red-500">{submitError}</p>
                      )}
                    </form>
                  </>
                ) : (
                  /* ===============================================
                      SUCCESS STATE
                  ================================================ */
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-2xl text-[#f97316]">
                      ✓
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-[#18395b]">
                      Demo Request Received
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Thank you. Our team will contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
