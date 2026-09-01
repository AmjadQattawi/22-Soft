interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverBorder: string;
  iconBg: string;
  iconBorder: string;
}

export default function OverviewCard({
  icon,
  title,
  description,
  hoverBorder,
  iconBg,
  iconBorder,
}: OverviewCardProps) {
  return (
    <div
      className={`group relative bg-white border border-slate-200/80 ${hoverBorder} rounded-2xl p-8 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer overflow-hidden`}
    >
      {/* Icon مع حركة دوران وتكبير عند الـ Hover */}
      <div
        className={`w-14 h-14 rounded-2xl ${iconBg} border ${iconBorder} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}
      >
        {icon}
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
