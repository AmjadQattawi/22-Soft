// data/featuresData.ts
import posBillingImg from "../../assets/features/pos-billing.png";
import positionChartImg from "../../assets/features/position-chart.png";
import PreciseInventoryImg from "../../assets/features/Precise Inventory.png";
import auditLedgerImg from "../../assets/features/audit-ledger.png";

export interface FeatureItem {
  id: number;
  number: string;
  badge: string;
  title: string;
  description: string;
  // highlights: string[];
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
  badgeBg: string;
}

export const featuresList: FeatureItem[] = [


  {
    id: 1,
    number: "01",
    badge: "Market Analytics",
    title: "Live Bullion & Currency Position",
    description:
      "Comprehensive real-time monitoring of your liquid cash and physical bullion exposure across global and local markets.",
    // highlights: [
    //   "Live tracking of Short vs. Long bullion positions to prevent market loss",
    //   "Multi-currency support (JoD, USD, SAR) with instant exchange revaluation",
    //   "Visual chart analytics for purchase versus sales volume over time",
    // ],
    imageSrc: positionChartImg,
    imageAlt: "Live Bullion and Currency Position Analytics",
    accentColor: "border-[#43923d]/50",
    badgeBg: "bg-[#43923d]/10 text-[#43923d]",
  },

    {
    id: 2,
    number: "02",
    badge: "Security & Control",
    title: "Audit Trail & Financial Ledger",
    description:
      "Strict double-entry accounting and comprehensive operational auditing to prevent manual discrepancies or stock shrinkage.",
    // highlights: [
    //   "Full audit trail tracking employee actions, voucher edits, and deletions",
    //   "Automatic balanced journal entries in both physical gold and cash currency",
    //   "Fast ledger settlement for scrap (كسر) trade and merchant accounts",
    // ],
    imageSrc: auditLedgerImg,
    imageAlt: "Audit Trail and Accounting Ledger",
    accentColor: "border-amber-500/50",
    badgeBg: "bg-amber-50 text-amber-600",
  },


  {
    id: 3,
    number: "03",
    badge: "Precise Inventory",
    title: "Jewelry Items & Gem Valuation",
    description:
      "Fine-grained inventory management distinguishing between gross physical weight, net pure weight, and precious stones.",
    // highlights: [
    //   "Automatic deduction for stones, diamonds, and zircons weight",
    //   "Support for jewelry boxes and organized physical tray inventories",
    //   "Barcode & QR tag generation for instant counter auditing",
    // ],
    imageSrc: PreciseInventoryImg,
    imageAlt: "Jewelry Inventory and Purchase Valuation",
    accentColor: "border-blue-500/50",
    badgeBg: "bg-blue-50 text-blue-600",
  },

  {
    id: 4,
    number: "04",
    badge: "Fast POS & Invoicing",
    title: "Smart Retail POS & Making Charges",
    description:
      "Instant point-of-sale invoicing designed specifically for counter sales, managing karat conversions and making fees on the fly.",
    // highlights: [
    //   "Instant calculation of making charges (الحِلة) per gram or item",
    //   "Multi-payment split: Cash, Visa, and scrap gold exchange in one invoice",
    //   "Real-time gold karat conversion (18k, 21k, 24k) at live market price",
    // ],
    imageSrc: posBillingImg,
    imageAlt: "22-Gold DX POS Billing Interface",
    accentColor: "border-[#f97316]/50",
    badgeBg: "bg-[#f97316]/10 text-[#f97316]",
  },
];
