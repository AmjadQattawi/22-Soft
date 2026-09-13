import { Link } from "react-router-dom";
const WHY_ITEMS = [
  {
    icon: "💬",
    title: "Personalized Support",
    description:
      "We understand that each business in the jewelry sector has unique needs, offering dedicated account managers who tailor solutions specifically to your process.",
  },
  {
    icon: "🎓",
    title: "Comprehensive Training",
    description:
      "Seamless integration through hands-on sessions covering everything from basic sales flows to advanced accounting ledgers and bullion management.",
  },
  {
    icon: "🛠️",
    title: "Technical Assistance",
    description:
      "Reliable support ensuring high availability, continuous data backup, and rapid troubleshooting to keep store branches running uninterrupted.",
  },
  {
    icon: "⚙️",
    title: "Continuous Feedback",
    description:
      "Product updates driven by actual market needs, continuously refining features based on direct insights from gold traders and craftsmen.",
  },
];
export default function AboutTeaser() {
  return (
    <section id="about" className="bg-slate-100/70 px-6 md:px-10 py-12 md:py-16 lg:py-14">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        {/* العنوان الرئيسي مثل الصورة */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900  tracking-wider uppercase">
          Who We Are
        </h2>

        {/* النص التعريفي بنفس التنسيق والمحاذاة */}
        <p className="text-slate-500 text-sm sm:text-lg leading-relaxed   mx-auto">
          22-Soft, a software company based in Jordan, specializes in delivering
          innovative digital solutions to the gold and jewelry sector. Our focus
          is on helping businesses improve operational efficiency and inventory
          accuracy through specialized software. We cater to jewelry retailers,
          wholesalers, and manufacturers aiming to modernize their operations.
        </p>

        {/* الزر البيضاوي البسيط مثل الصورة تماماً */}
        <div className="pt-2">
          <Link
            to="/about"
            className="inline-block px-8 py-2 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
          >
            About Us
          </Link>
        </div>



        {/* الخط الفاصل والعنوان الوسيط */}
        <div className="relative my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300/80" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-100/70 px-6 text-1xl md:text-2xl font-bold tracking-widest text-slate-700 uppercase">
              Why 22-Soft
            </span>
          </div>
        </div>

        {/* Four column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center pt-2">
          {WHY_ITEMS.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-slate-200/70 text-slate-600 text-xl">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm sm:text-lg leading-relaxed   mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
