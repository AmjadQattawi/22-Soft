import { Link } from "react-router-dom";
import logo from "../../assets/company Logo/logo-22-Soft.webp";

export default function Header() {
  return (
 
    <header
      className="
    sticky top-0 z-50
    bg-linear-to-r from-[#e5e7f2] via-[#18395b] to-[#102b46]
    
    backdrop-blur-md
    border-none
  "
    >
      <div className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-18 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
           className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/22-gold-dx"
            className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-[#c94f00] px-3  text-sm font-medium transition-colors duration-200"
          >
            About Us
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          to="/22-gold-dx"
          className="px-5 py-2 bg-[#c94f00] hover:bg-[#ea580c] active:scale-95 text-white rounded-xl text-sm sm:text-base font-semibold transition duration-200 shadow-lg shadow-orange-500/20 hover:scale-105"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
