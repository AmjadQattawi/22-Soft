import { useTranslation } from "react-i18next";

export default function FooterContact() {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-base uppercase tracking-wider">
        {t("footer.contact.title")}
      </p>
      <ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2">
  <span className="text-[#f97316] shrink-0 text-sm">📍</span>
<a
  href="https://maps.app.goo.gl/cFQKUsXYDpEVbujj8"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  {t("footer.contact.address")}
</a>
</li>
        <li className="flex items-center gap-2">
          <span className="text-[#f97316] shrink-0 text-sm">📞</span>
          <a href="tel:00962792223100" className="hover:text-white transition">
            +962 79 222 3100
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#f97316] shrink-0 text-sm">✉️</span>
          <a href="mailto:info@22-soft.com" className="hover:text-white transition break-all">
            info@22-soft.com
          </a>
        </li>
      </ul>
    </div>
  );
}