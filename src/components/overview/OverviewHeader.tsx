import { useTranslation } from "react-i18next"; 
 
export default function OverviewHeader() { 
  const { t } = useTranslation(); 
 
  return ( 
    <div className="mb-14 text-center"> 
      <span className="text-sm font-semibold uppercase tracking-widest text-[#c2410c]"> 
        {t("home.overviewHeader.label")} 
      </span> 
 
      <h2 className="mt-3 text-3xl font-bold text-[#18395b] md:text-5xl"> 
        22-Gold DX 
      </h2> 
 
      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg"> 
        {t("home.overviewHeader.description")} 
      </p> 
    </div> 
  ); 
}