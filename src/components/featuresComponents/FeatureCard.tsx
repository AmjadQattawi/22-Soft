export interface FeatureCardProps {
  number: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
  badgeBg: string;
}

export default function FeatureCard({
  number,
  badge,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  accentColor,
  badgeBg,
}: FeatureCardProps) {
  return (
    <div
      className={`group relative bg-white border border-slate-200/80 hover:${accentColor} rounded-3xl p-2.5 lg:p-3 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 overflow-hidden`}
    >
      {/* 1. Top section: Number, badge, and titles */}
      <div className="space-y-2">
        {/*  Header: Serial number and badge */}
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 text-xl font-bold rounded-full tracking-wide ${badgeBg}`}
          >
            {badge}
          </span>
          <span className="text-3xl font-black text-slate-200 group-hover:text-slate-400 transition-colors">
            {number}
          </span>
        </div>

        {/* Feature title */}
        <h3 className="text-base lg:text-lg font-black text-slate-900 tracking-tight group-hover:text-black transition-colors">
          {title}
        </h3>

        {/* Description */}
        {/* <p className="text-slate-600 text-xs leading-snug line-clamp-2">{description}</p> */}

        {/* points*/}
        <ul className="space-y-1 pt-1">
          {highlights.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-xs lg:text-sm text-slate-700 font-medium"
            >
              <span className="text-[#f97316] font-bold">✓</span>
              <span>{point}</span>
            </li>   
          ))}
        </ul>
      </div>

      {/* 2. screen image */}
      <div className="mt-2 pt-2  ">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-inner group-hover:shadow-md transition-shadow">
          <img
            src={imageSrc}
            alt={imageAlt}
            // هون
            className={`w-[30vw] h-40 md:h-48 transition-transform duration-700 group-hover:scale-105 ${
              number === "01" ? "object-contain p-1" : "object-cover object-top"
            }`}
          />

          {/* A subtle gradient effect above the bottom edge of the image*/}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
