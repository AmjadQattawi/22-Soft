import { motion } from "framer-motion";
import FeatureCard, { type FeatureCardProps } from "./FeatureCard"

// استيراد الصور التي جهزتها
import posBillingImg from "../../assets/features/pos-billing.png";
import positionChartImg from "../../assets/features/position-chart.png";
import inventoryPurchaseImg from "../../assets/features/inventory-purchase.png";
import auditLedgerImg from "../../assets/features/audit-ledger.png";

const featuresData: FeatureCardProps[] = [
  {
    number: "01",
    badge: "Fast POS & Invoicing",
    title: "Smart Retail POS & Making Charges",
    description:
      "Instant point-of-sale invoicing designed specifically for counter sales, managing karat conversions and making fees on the fly.",
    highlights: [
      "Instant calculation of making charges (الحِلة) per gram or item",
      "Multi-payment split: Cash, Visa, and scrap gold exchange in one invoice",
      "Real-time gold karat conversion (18k, 21k, 24k) at live market price",
    ],
    imageSrc: posBillingImg,
    imageAlt: "22-Gold DX POS Billing Interface",
    accentColor: "border-[#f97316]/50",
    badgeBg: "bg-[#f97316]/10 text-[#f97316]",
  },
  {
    number: "02",
    badge: "Market Analytics",
    title: "Live Bullion & Currency Position",
    description:
      "Comprehensive real-time monitoring of your liquid cash and physical bullion exposure across global and local markets.",
    highlights: [
      "Live tracking of Short vs. Long bullion positions to prevent market loss",
      "Multi-currency support (JoD, USD, SAR) with instant exchange revaluation",
      "Visual chart analytics for purchase versus sales volume over time",
    ],
    imageSrc: positionChartImg,
    imageAlt: "Live Bullion and Currency Position Analytics",
    accentColor: "border-[#43923d]/50",
    badgeBg: "bg-[#43923d]/10 text-[#43923d]",
  },
  {
    number: "03",
    badge: "Precise Inventory",
    title: "Jewelry Items & Gem Valuation",
    description:
      "Fine-grained inventory management distinguishing between gross physical weight, net pure weight, and precious stones.",
    highlights: [
      "Automatic deduction for stones, diamonds, and zircons weight",
      "Support for jewelry boxes and organized physical tray inventories",
      "Barcode & QR tag generation for instant counter auditing",
    ],
    imageSrc: inventoryPurchaseImg,
    imageAlt: "Jewelry Inventory and Purchase Valuation",
    accentColor: "border-blue-500/50",
    badgeBg: "bg-blue-50 text-blue-600",
  },
  {
    number: "04",
    badge: "Security & Control",
    title: "Audit Trail & Financial Ledger",
    description:
      "Strict double-entry accounting and comprehensive operational auditing to prevent manual discrepancies or stock shrinkage.",
    highlights: [
      "Full audit trail tracking employee actions, voucher edits, and deletions",
      "Automatic balanced journal entries in both physical gold and cash currency",
      "Fast ledger settlement for scrap (كسر) trade and merchant accounts",
    ],
    imageSrc: auditLedgerImg,
    imageAlt: "Audit Trail and Accounting Ledger",
    accentColor: "border-amber-500/50",
    badgeBg: "bg-amber-50 text-amber-600",
  },
];

export default function Features() {
  return (
    <motion.section
      id="features"
      className="relative bg-white px-6 md:px-12 py-4 lg:py-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border-[#f97316]/30 rounded-full">
            ✦ Operational Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for Every Corner of Your{" "}
            <span className="text-[#f97316]">Jewelry Business</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Eliminate operational blind spots. From the retail sales counter to complex bullion settlement ledgers, 22-Gold DX gives you full command over your inventory and cash flows.
          </p>
        </div>

        {/*   2x2 grid */}
        <div className=" max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 ">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}