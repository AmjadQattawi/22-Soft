export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
      <p>© {currentYear} 22-Soft. All Rights Reserved.</p>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="#" className="hover:text-white transition">
          Terms of Service
        </a>
        <span>•</span>
        <span className="text-slate-400">Built for Gold & Bullion Trade</span>
      </div>
    </div>
  );
}