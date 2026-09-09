import { Link } from "react-router-dom";
import logo from "../../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    //
    // bg-linear-to-r from-[#e5e7f2] via-[#e5e7f2] to-[#e5e7f2]
// border-b border-slate-800/5
    // from-purple-400 via-indigo-300 to-purple-500
//  bg-linear-to-r from-[#cfcfd1] via-[#2b304b] to-[#2b304b]
    // shadow-lg shadow-black/20
    
<header
  className="
    sticky top-0 z-50
    bg-[#18395b]
    bg-linear-to-r from-[#e5e7f2] via-[#18395b] to-[#18395b]
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
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Home
          </Link>
          {/* <Link
            to="/features"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Products
          </Link> */}

          <Link
            to="/clients"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            clients
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-[#e26b16] hover:bg-[#e26b16]/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            About Us
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          to="/contact"
          className="px-5 py-2 bg-[#f97316] hover:bg-[#ea580c]   active:scale-95 text-white  rounded-xl text-sm sm:text-base font-semibold transition duration-200  shadow-lg shadow-orange-500/20 hover:scale-105 "
        > 
          

          Request a Demo
        </Link>
      </div>
    </header>
  );
}
