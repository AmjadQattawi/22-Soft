const FEATURES = [
  {
    title: "Enhanced Desktop Experience",
    description: "Powerful business and accounting capabilities.",
  },
  {
    title: "Expanded Capabilities",
    description: "Designed for the needs of modern jewelry businesses.",
  },
  {
    title: "Mobile Companion App",
    description: "Stay connected to your business wherever you are.",
  },
];

export default function OverviewDetails() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#18395b] md:text-3xl">
        Your Business. Connected Everywhere.
      </h3>

      <p className="mt-5 leading-7 text-slate-600">
        Built on the proven 22-Gold foundation, 22-Gold DX helps you
        view, monitor, and manage your accounting data anytime, anywhere.
      </p>

      <div className="mt-8 space-y-5">
        {FEATURES.map((feature, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-[#18395b]">
              {feature.title}
            </h4>
            <p className="mt-1 text-sm text-slate-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}