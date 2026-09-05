import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "retail",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#234974]/90 text-white px-6 md:px-12 py-20 lg:py-28 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* الطرف الأيسر: عنوان عريض ونص تعريفي مريح */}
          <div className="lg:w-5/12 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wide bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316] rounded-full">
              ✦ Let's Connect
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Contact <span className="text-[#f97316]">us.</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md">
              Whether you are running a retail showroom, gold workshop, or a bullion trading desk, we are ready to discuss how 22-Gold DX fits your daily ledger precision.
            </p>

   
          </div>

          {/* الطرف الأيمن: مساحة الفورم المفتوحة بحقول واضحة وكبيرة */}
          <div className="lg:w-7/12 w-full">
            {submitted ? (
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-10 md:p-14 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f97316]/20 text-[#f97316] flex items-center justify-center text-3xl font-bold mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto">
                  Thank you for reaching out. Our deployment consultants will review your requirements and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* الصف الأول: الاسم واسم المحل */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Full Name <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border text-white border-white  text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Showroom / Company Name <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
                    />
                  </div>
                </div>

                {/* الصف الثاني: الهاتف والإيميل */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Mobile / WhatsApp <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Business Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
                    />
                  </div>
                </div>

                {/* الصف الثالث: نوع النشاط والمدينة */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-200">
                      Operation Sector
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition"
                    >
                      <option value="retail">Retail Showroom (معرض مفرق)</option>
                      <option value="workshop">Goldsmith & Workshop (مشغل صياغة)</option>
                      <option value="wholesale">Bullion & Wholesale (تجارة جملة وسبائك)</option>
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
                  </div>
                </div>

                {/* الصف الرابع: حقل الرسالة الكبير */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current workflow, number of workstations, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#234974]/90 border border-white text-white placeholder-slate-500 text-base focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] transition resize-none"
                  />
                </div>

                {/* زر الإرسال */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-3"
                  >
                    <span>Contact Us</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}