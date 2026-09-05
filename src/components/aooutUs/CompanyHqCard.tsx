export default function CompanyHqCard() {
  return (
    <div className="lg:col-span-5 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-7 md:p-9 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-[#f97316]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="space-y-6 relative">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#f97316] font-extrabold">
            Headquarters
          </span>
          <h3 className="text-xl font-bold text-white mt-1">22-Soft Company</h3>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            Specialized Enterprise Software & Solutions
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4 text-xs md:text-sm text-slate-300">
          <div>
            <p className="font-semibold text-white">Main Office</p>
            <p className="text-slate-400 mt-0.5">
              Ali Nassouh At-Taher St., Al Swaifyeh, Amman, Jordan
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Telephone</p>
            <a
              href="tel:065930238"
              className="text-slate-400 hover:text-white transition mt-0.5 block"
            >
              06 5930238
            </a>
          </div>

          <div>
            <p className="font-semibold text-white">Direct Mobile Lines</p>
            <p className="text-slate-400 mt-0.5">
              <a
                href="tel:00962792223100"
                className="hover:text-white transition"
              >
                079 2223100
              </a>
              {" • "}
              <a
                href="tel:00962785284592"
                className="hover:text-white transition"
              >
                078 5284592
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Email</p>
            <a
              href="mailto:info@22-soft.com"
              className="text-slate-400 hover:text-white transition mt-0.5 block"
            >
              info@22-soft.com
            </a>
          </div>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-6 relative">
        <a
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs md:text-sm shadow-md transition-all duration-200"
        >
          Schedule Consultation & Visit
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
