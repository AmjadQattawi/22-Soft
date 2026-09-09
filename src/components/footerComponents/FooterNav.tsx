export default function FooterNav() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-base uppercase tracking-wider">
        Navigation
      </p>
      <ul className="space-y-2.5 text-sm text-slate-300">
        <li>
          <a href="#overview" className="hover:text-[#f97316] transition">
            Overview
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-[#f97316] transition">
            Core Features
          </a>
        </li>
        <li>
          <a href="#clients" className="hover:text-[#f97316] transition">
            Key Clients
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#f97316] transition">
            About Us
          </a>
        </li>
        <li>
          <a href="contact" className="text-[#f97316] hover:underline font-semibold">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}