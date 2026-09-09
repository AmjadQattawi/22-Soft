export default function FooterCapabilities() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-base uppercase tracking-wider">
        Capabilities
      </p>
      <ul className="space-y-2.5 text-sm text-slate-300">
        <li>
          <span className="hover:text-white transition cursor-default">
            Retail Showroom POS
          </span>
        </li>
        <li>
          <span className="hover:text-white transition cursor-default">
            Bullion & Karat Sync
          </span>
        </li>
        <li>
          <span className="hover:text-white transition cursor-default">
            Scrap & Melting Log
          </span>
        </li>
        <li>
          <span className="hover:text-white transition cursor-default">
            Multi-Currency Vault
          </span>
        </li>
        <li>
          <span className="hover:text-white transition cursor-default">
            Real-Time Mobile Sync
          </span>
        </li>
      </ul>
    </div>
  );
}