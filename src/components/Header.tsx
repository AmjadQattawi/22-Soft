import logo from "../assets/22_soft_logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-50 border-b border-slate-200 ">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" >
          <img
            src={logo}
            alt="22-Soft Logo"
            className="h-14 w-auto mix-blend-multiply"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-[#234974] hover:text-[#43923d] font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[#234974] hover:text-[#43923d] font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#services"
            className="text-[#234974] hover:text-[#43923d] font-medium transition-colors"
          >
            Services
          </a>

          <a
            href="#about"
            className=" text-[#234974] hover:text-[#43923d] font-medium transition-colors"
          >
            About
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-[#43923d] hover:bg-[#347430] text-white px-5 py-2.5 rounded-lg font-semibold transition-all"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
