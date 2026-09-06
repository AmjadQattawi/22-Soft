export default function FooterBrand() {
  const facebookURL = "https://www.facebook.com/TwentyTwoSoft/directory_links";
  const linkedinURL = "https://www.linkedin.com/company/22-soft/";
  const instgramURL = "https://www.instagram.com/22soft_2022/";
  return (
    <div className="lg:col-span-4 space-y-5">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-tight text-white">
          22-<span className="text-[#f97316]">Gold DX</span>
        </span>
      </div>
      <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
        Specializes in delivering innovative digital solutions to the gold and
        jewelry sector. Our focus is on helping businesses improve operational
        efficiency and inventory accuracy through specialized enterprise
        software.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-3 pt-2">
        <a
          href={facebookURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f97316] text-white flex items-center justify-center transition-all duration-200"
        >
          <span className="font-bold text-xs">f</span>
        </a>
        <a
          href={linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f97316] text-white flex items-center justify-center transition-all duration-200"
        >
          <span className="font-bold text-xs">in</span>
        </a>
        <a
          href={instgramURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f97316] text-white flex items-center justify-center transition-all duration-200"
        >
          <span className="font-bold text-xs">ig</span>
        </a>
      </div>
    </div>
  );
}
