  import { useState, useEffect } from "react";
  import SlideOne from "./SlideOne";
 
  import SliderControls from "./SliderControls";
  import { AnimatePresence, motion } from "framer-motion";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
  export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slides = [<SlideOne />, <SlideTwo />, <SlideThree />];
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    useEffect(() => {
      if (isPaused) return;

      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);

      return () => clearInterval(timer);
    }, [isPaused]);

    return (
      <section
        id="home"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="
        relative
        min-h-[calc(100vh-4rem)] bg-linear-to-br from-[#234974] via-[#18395b] to-[#102b46]
      text-white flex items-center overflow-hidden px-6 lg:px-16 "
      >
        <div className="w-full max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>

        <SliderControls
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onNext={nextSlide}
          onPrev={prevSlide}
          onSelect={setCurrentSlide}
        />
      </section>
    );
  }
