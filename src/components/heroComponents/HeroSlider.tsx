import { useState, useEffect } from "react";
import Mockup from "../../assets/mockup/Mockup.png";
import SlideContent from "./SlideContent";
import SlideVisual from "./SlideVisual";
import SliderControls from "./SliderControls";
import MobileMockupShowcase from "../mobileApp/MobileMockupShowcase";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    title: "Twenty Two Programming Solutions",
    subtitle:
      "Revolutionizing Jewelry Operations with Precision Software Solutions",
    // accent: Title colours
    accent: "from-white via-purple-100 to-indigo-300",
    //glow: The color of the illuminated background behind the title and all the content
    glow: "bg-purple-600/25",
    cta: {
      primary: { label: "Explore Solutions", href: "#solutions" },
      secondary: { label: "About Us", href: "about" },
    },
    badge: "Next-Gen Enterprise Architecture",
    metrics: [
      { label: "Data Precision", value: "100%" },
      { label: "Jewelry Operations", value: "Real-Time" },
      { label: "Branch Connectivity", value: "Seamless" },
    ],
    renderVisual: () => null,
  },
  {
    id: 2,
    title: "22-Gold DX",
    titleSecondLine: "Specialized Software Solutions",
    subtitle: "Easy to Use, User-Friendly Applications",
    accent: "from-amber-300 via-orange-400 to-[#f97316]",
    glow: "bg-orange-500/20",
    cta: {
      primary: { label: "Book Live Demo", href: "contact" },
      secondary: { label: "Explore Modules", href: "features" },
    },

    renderVisual: () => (
      <div className="w-full flex justify-center items-center">
        <img
          src={Mockup}
          alt="22-Gold DX Overview"
          className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] lg:scale-150 transition-transform duration-500"
        />
      </div>
    ),
  },

  {
    id: 3,
    title: "Custom Enterprise Applications",
    subtitle: "Tailored Desktop Systems, PDA Integration & Dedicated Support",
    // accent: Title colours
    accent: "from-white via-cyan-100 to-blue-300",
    //glow: The color of the illuminated background behind the title and all the content
    glow: "bg-cyan-600/20",
    cta: {
      primary: { label: "Request Custom Quote", href: "contact" },
      secondary: { label: "Mobile POS Overview", href: "mobile-app" },
    },
    renderVisual: () => <MobileMockupShowcase />,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };
  const slide = SLIDES[index];

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000); //

    return () => clearInterval(timer);
  }, [isPaused, index]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[calc(100vh-4rem)] bg-[#18395b] text-white flex items-center justify-center px-6 lg:px-16 overflow-hidden select-none"
    >
      {/* Dynamic Ambient Glow */}
      <div
        className={`absolute w-100 h-100 rounded-full ${slide.glow} blur-[160px] pointer-events-none transition-all duration-700`}
      />

      {/* Split Grid Layout with Animated Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center -mt-12"
        >
          <SlideContent
            title={slide.title}
            titleSecondLine={slide.titleSecondLine}
            subtitle={slide.subtitle}
            accent={slide.accent}
            cta={slide.cta}
            badge={slide.badge}
            metrics={slide.metrics}
            hasVisual={!!slide.renderVisual()}
          />

          <SlideVisual renderVisual={slide.renderVisual} />
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls & Navigation */}
      <SliderControls
        totalSlides={SLIDES.length}
        currentIndex={index}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelect={(i) => setIndex(i)}
      />
    </div>
  );
}
