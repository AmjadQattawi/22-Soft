import { useTranslation } from "react-i18next";

export default function FooterCapabilities() { 
  const { t } = useTranslation();

  return ( 
    <div className="lg:col-span-2 space-y-4"> 
      <p className="text-white font-bold text-base uppercase tracking-wider"> 
        {t("footer.capabilities.title")}
      </p> 
      <ul className="space-y-2.5 text-sm text-slate-300"> 
        <li> 
          <span className="hover:text-white transition cursor-default"> 
            {t("footer.capabilities.retailShowroomPOS")}
          </span> 
        </li> 
        <li> 
          <span className="hover:text-white transition cursor-default"> 
            {t("footer.capabilities.bullionKaratSync")}
          </span> 
        </li> 
        <li> 
          <span className="hover:text-white transition cursor-default"> 
            {t("footer.capabilities.scrapMeltingLog")}
          </span> 
        </li> 
        <li> 
          <span className="hover:text-white transition cursor-default"> 
            {t("footer.capabilities.multiCurrencyVault")}
          </span> 
        </li> 
        <li> 
          <span className="hover:text-white transition cursor-default"> 
            {t("footer.capabilities.realTimeMobileSync")}
          </span> 
        </li> 
      </ul> 
    </div> 
  ); 
}