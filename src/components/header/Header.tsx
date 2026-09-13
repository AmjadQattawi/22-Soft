import { Link } from "react-router-dom";
import logo from "../../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    <header
      className="
    sticky top-0 z-50
    bg-[#18395b]
    bg-linear-to-r from-[#e5e7f2] via-[#18395b] to-[#102b46]
    backdrop-blur-md
    border-none
  "
    >
      <div className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="22-Soft" className="h-18 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-white hover:text-[#ea580c] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/Products"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Products
          </Link>

  

          <Link
            to="/about"
            className="text-white hover:text-[#ea580c] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            About Us
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          to="/Products"
          className="px-5 py-2 bg-[#f97316] hover:bg-[#ea580c]   active:scale-95 text-white  rounded-xl text-sm sm:text-base font-semibold transition duration-200  shadow-lg shadow-orange-500/20 hover:scale-105 "
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
