import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export interface IFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  city: string;
  message: string;
}

const initialFormData: IFormData = {
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  businessType: "retail",
  city: "",
  message: "",
};

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<IFormData>(() => {
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

  return (
    <section
      id="contact"
      className="relative bg-[#102b46] text-white px-6 md:px-12 py-20 lg:py-28 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl min-h-[calc(100vh-30rem)] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left side: Prominent title and text*/}
          <ContactInfo />

          {/*Right side: The form*/}
          <div className="lg:w-7/12 w-full">
            {submitted ? (
              <div className="bg-[#489e3b] border border-slate-700/80 rounded-3xl p-10 md:p-14 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f97316]/20 text-[#f97316] flex items-center justify-center text-3xl font-bold mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto">
                  Thank you for reaching out. Our deployment consultants will
                  review your requirements and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("formData");
                    setFormData(initialFormData);
                    setSubmitted(false);
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl font-semibold text-sm border border-slate-600/80 bg-[#234974]/90 hover:bg-slate-700 hover:border-[#f97316] text-slate-200 hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5"
                >
                  Back
                </button>
              </div>
            ) : (
              // call contact form
              <ContactForm
                setSubmitted={setSubmitted}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
