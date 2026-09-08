import { Link } from "react-router-dom";
import logo from "../../assets/company Logo/logo-22-Soft.png";

export default function Header() {
  return (
    // 
<header className="
  sticky top-0 z-50
  bg-linear-to-r from-[#a8c5e2] via-[#234974] to-[#a8c5e2]
  backdrop-blur-md
  border-b border-white/10
  shadow-sm
">


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
          className="bg-[#e26b16] hover:bg-[#f27a24] active:scale-95 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md shadow-[#e26b16]/25 hover:shadow-lg hover:shadow-[#e26b16]/40 "
           >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
