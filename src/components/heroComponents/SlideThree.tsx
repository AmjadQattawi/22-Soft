import MobileMockupShowcase from "../mobileApp/MobileMockupShowcase";

export default function SlideThree() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Content */}
      <div className="text-center lg:text-left">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          Custom Software Solutions
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Custom Enterprise
          <span className="block text-[#f97316]">
            Applications
          </span>
        </h2>

        <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200">
          Tailored software built around your business workflows,
          requirements, and operational needs.
        </p>

        <div className="mt-7 flex justify-center lg:justify-start">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-3 text-sm sm:text-base font-semibold text-white transition duration-200 hover:bg-[#ea580c] hover:-translate-y-0.5"
          >
            Request a Custom Solution
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="flex items-center justify-center lg:scale-110">
        <MobileMockupShowcase />
      </div>

    </div>
  );
}