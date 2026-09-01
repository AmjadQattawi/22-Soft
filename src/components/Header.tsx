import logo from "../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#234974]/90 backdrop-blur-md border-b border-white/10  ">
      <div className="max-w-full   mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-16 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#overview"
            className="text-white hover:bg-[#e26b16] px-3 py-1 rounded-xl font-medium transition-colors"
          >
            Overview
          </a>
          <a
            href="#features"
            className="text-white hover:bg-[#e26b16] px-3 py-1 rounded-xl font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#mobile-app"
            className="text-white hover:bg-[#e26b16] px-3 py-1 rounded-xl font-medium transition-colors"
          >
            Mobile App
          </a>
          <a
            href="#clients"
            className="text-white hover:bg-[#e26b16] px-3 py-1 rounded-xl font-medium transition-colors"
          >
            Clients
          </a>
          <a
            href="#about"
            className="text-white hover:bg-[#e26b16] px-3 py-1 rounded-xl font-medium transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Action Button */}
        <a
          href="#contact"
          className="bg-[#ed7d2c] hover:bg-[#f1a26a] text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md shadow-green-950/20"
        >
          Request a Demo
        </a>
      </div>
    </header>
  );
}
