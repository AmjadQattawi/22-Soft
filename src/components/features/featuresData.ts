// data/featuresData.ts
import posBillingImg from "../../assets/features/pos-billing.png";
import positionChartImg from "../../assets/features/position-chart.webp";
import PreciseInventoryImg from "../../assets/features/Precise Inventory.png";
import auditLedgerImg from "../../assets/features/audit-ledger.png";

export interface FeatureItem {
  id: number;
  number: string;
  translationKey: string;
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
    translationKey: "marketAnalytics",
    // highlights: [
    //   "Live tracking of Short vs. Long bullion positions to prevent market loss",
    //   "Multi-currency support (JoD, USD, SAR) with instant exchange revaluation",
    //   "Visual chart analytics for purchase versus sales volume over time",
    // ],
    imageSrc: positionChartImg,
    imageAlt: "Live Bullion and Currency Position Analytics",
    accentColor: "border-[#43923d]/50",
    badgeBg: "bg-[#43923d]/10 text-[#2f6f2b]",
  },

    {
    id: 2,
    number: "02",
    translationKey: "securityControl",
    // highlights: [
    //   "Full audit trail tracking employee actions, voucher edits, and deletions",
    //   "Automatic balanced journal entries in both physical gold and cash currency",
    //   "Fast ledger settlement for scrap (كسر) trade and merchant accounts",
    // ],
    imageSrc: auditLedgerImg,
    imageAlt: "Audit Trail and Accounting Ledger",
    accentColor: "border-amber-500/50",
   badgeBg: "bg-amber-50 text-amber-800",
  },


  {
    id: 3,
    number: "03",
    translationKey: "preciseInventory",
    // highlights: [
    //   "Automatic deduction for stones, diamonds, and zircons weight",
    //   "Support for jewelry boxes and organized physical tray inventories",
    //   "Barcode & QR tag generation for instant counter auditing",
    // ],
    imageSrc: PreciseInventoryImg,
    imageAlt: "Jewelry Inventory and Purchase Valuation",
    accentColor: "border-blue-500/50",
    badgeBg: "bg-blue-50 text-blue-800",
  },

  {
    id: 4,
    number: "04",
    translationKey: "posBilling",
    // highlights: [
    //   "Fast point-of-sale billing optimized for jewelry retail",
    //   "Automatic calculation of making charges, tax, and final sale price",
    //   "Real-time gold karat conversion (18k, 21k, 24k) at live market price",
    // ],
    imageSrc: posBillingImg,
    imageAlt: "22-Gold DX POS Billing Interface",
    accentColor: "border-[#f97316]/50",
    badgeBg: "bg-[#f97316]/10 text-[#c2410c]",
  },
];