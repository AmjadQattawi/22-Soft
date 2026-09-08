import SectionContainer from "../cssComponents/SectionContainer";
import OverviewCard from "./OverviewCard";
import OverviewHeader from "./OverviewHeader";


const overviewData = [
  {
    icon: "⚖️",
    title: "Dual Weight & Karat Tracking",
    description:
      "Distinguish instantly between gross weight, net pure gold, and precious stone deductions. Automated calculation of making charges (الحِلة) per gram or item.",
    hoverBorder: "hover:border-[#f97316]/50",
    iconBg: "bg-[#f97316]/20",
    iconBorder: "border-[#f97316]/40",
  },
  {
    icon: "📈",
    title: "Multi-Currency & Gold Position",
    description:
      "Track live cash and bullion exposure across JoD, USD, SAR, and pure Gold. Real-time monitoring of Short vs. Long positions and scrap (كسر) trade settlements.",
    hoverBorder: "hover:border-[#43923d]/50",
    iconBg: "bg-[#43923d]/20",
    iconBorder: "border-[#43923d]/40",
  },
  {
    icon: "📱",
    title: "Desktop & Mobile Synergy",
    description:
      "Equip back-office accountants with deep ledger auditing and robust desktop reporting, while floor sales reps use fast mobile POS and QR barcode scanning.",
    hoverBorder: "hover:border-blue-400/50",
    iconBg: "bg-blue-500/20",
    iconBorder: "border-blue-400/40",
  },
];

export default function Overview() {
  return (

    <SectionContainer id="overview" className="bg-white ">

        {/* Section Title: Introduction to the System */}
        <OverviewHeader />

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {overviewData.map((item, index) => (
            <OverviewCard key={index} {...item} index={index} />
          ))}
        </div>

        {/* End width for all section  */}
    </SectionContainer>
  );
}
