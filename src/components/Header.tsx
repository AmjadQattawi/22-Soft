import logo from '../assets/22_soft_logo.jpg';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
      <img src={logo} alt="22-Soft Logo" className="h-12 w-auto object-contain" />

      <nav className="flex items-center gap-10 font-medium text-slate-600 ">
        <a href="#home" className="hover:text-[#1e3a5f] transition-colors hover:underline">Home</a>
        <a href="#services" className="hover:text-[#1e3a5f] transition-colors hover:underline">Services</a>
        <a href="#about" className="hover:text-[#1e3a5f] transition-colors hover:underline">About</a>
      </nav>

      <a 
        href="#contact" 
        className="bg-[#f07c1e] hover:bg-[#d96b14] text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-all"
      >
        Request a Demo
      </a>
    </header>
  );
}