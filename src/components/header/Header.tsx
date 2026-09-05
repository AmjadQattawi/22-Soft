import logo from "../../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    // 
    <header className="sticky top-0 z-50  bg-[#234974]/90 backdrop-blur-md border-b border-white/10  ">
      <div className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}  
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-14 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#overview"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Overview
          </a>
          <a
            href="#features"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Features
          </a>
          {/* <a
            href="#mobile-app"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Mobile App
          </a> */}
          <a
            href="#clients"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Clients
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            About Us
          </a>
        </nav>

        {/* Action Button */}
        <a
          href="#contact"
          className="bg-[#e26b16] hover:bg-[#f27a24] active:scale-95 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md shadow-[#e26b16]/25 hover:shadow-lg hover:shadow-[#e26b16]/40 "
           >
          Request a Demo
        </a>
      </div>
    </header>
  );
}
