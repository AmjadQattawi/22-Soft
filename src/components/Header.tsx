import logo from "../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#234974]/90 backdrop-blur-md border-b border-white/10  ">
      <div className="max-w-full   mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-9 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-white">
            22-soft
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#overview"
            className="text-slate-200 hover:text-[#43923d] font-medium transition-colors"
          >
            Overview
          </a>
          <a
            href="#features"
            className="text-slate-200 hover:text-[#43923d] font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#mobile-app"
            className="text-slate-200 hover:text-[#43923d] font-medium transition-colors"
          >
            Mobile App
          </a>
          <a
            href="#clients"
            className="text-slate-200 hover:text-[#43923d] font-medium transition-colors"
          >
            Clients
          </a>
          <a
            href="#about"
            className="text-slate-200 hover:text-[#43923d] font-medium transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Action Button */}
        <a
          href="#contact"
          className="bg-[#43923d] hover:bg-[#347430] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md shadow-green-950/20"
        >
          Request a Demo
        </a>
      </div>
    </header>
  );
}
