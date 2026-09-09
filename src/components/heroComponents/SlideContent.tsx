import { Link } from "react-router-dom";

interface SlideContentProps {
  title: string;
  titleSecondLine?: string;
  subtitle: string;
  accent: string;
  cta?: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  badge?: string;
  metrics?: { label: string; value: string }[];
  hasVisual: boolean;
}

export default function SlideContent({
  title,
  titleSecondLine,
  subtitle,
  accent,
  cta,
  badge,
  metrics,
  hasVisual,
}: SlideContentProps) {
  return (
    <div
      className={`space-y-4 text-left ${
        hasVisual
          ? "lg:col-span-5"
          : "lg:col-span-12 text-center max-w-4xl mx-auto"
      }`}
    >
      {badge && (
        <div className={`flex ${hasVisual ? "justify-start" : "justify-center"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-purple-200 tracking-wide">
              {badge}
            </span>
          </div>
        </div>
      )}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
        <span
          className={`block bg-linear-to-r ${accent} bg-clip-text text-transparent`}
        >
          {title}
        </span>
        {titleSecondLine && (
          <span className="block bg-linear-to-r from-indigo-300 via-purple-100 to-indigo-300 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            {titleSecondLine}
          </span>
        )}
      </h1>

      <p className="text-white text-lg sm:text-xl font-normal leading-relaxed">
        {subtitle}
      </p>

      {cta && (
        <div
          className={`flex flex-wrap gap-4 pt-2 ${hasVisual ? "justify-start" : "justify-center"}`}
        >
          <Link
            to={cta.primary.href}
            className="px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white text-sm sm:text-base font-semibold transition duration-200 shadow-lg shadow-orange-500/20 hover:scale-105"
          >
            {cta.primary.label}
          </Link>
          <a
            href={cta.secondary.href}
            className="px-6 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm sm:text-base font-medium transition duration-200 backdrop-blur-md"
          >
            {cta.secondary.label}
          </a>
        </div>
      )}

      {metrics && (
        <div className="pt-8 mt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
