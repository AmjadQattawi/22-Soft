import FooterBrand from "./FooterBrand";
import FooterCapabilities from "./FooterCapabilities";
import FooterNav from "./FooterNav";
import FooterHours from "./FooterHours";
import FooterContact from "./FooterContact";
import FooterBottomBar from "./FooterBottomBar";

export default function Footer() {
  return (
    <footer className="bg-[#102b46] text-slate-300 text-sm md:text-base border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          <FooterBrand />
          <FooterCapabilities />
          <FooterNav />
          <FooterHours />
          <FooterContact />
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <FooterBottomBar />
      </div>
    </footer>
  );
}