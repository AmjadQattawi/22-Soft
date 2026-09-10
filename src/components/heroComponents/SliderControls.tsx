interface SliderControlsProps {
  totalSlides: number;
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

export default function SliderControls({
  totalSlides,
  currentSlide,
  onNext,
  onPrev,
  onSelect,
}: SliderControlsProps) {
  return (
    <>
      {/* Previous - Left Center */}
      <button
        onClick={onPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20
           w-12 h-12 rounded-full border border-white/60
           flex  justify-center
           text-white text-3xl
           hover:bg-[#f97316]/20 hover:border-[#f97316] hover:text-[#f97316]
           transition-all duration-200
           cursor-pointer"
      >
        ‹
      </button>

      {/* Next - Right Center */}
      <button
        onClick={onNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20
           w-12 h-12 rounded-full border border-white/60
           flex  justify-center
           text-white text-3xl
           hover:bg-[#f97316]/20 hover:border-[#f97316] hover:text-[#f97316]
           hover:scale-110
           transition-all duration-200 cursor-pointer"
           
      >
        ›
      </button>

      {/* Dots - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 ">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "w-6 bg-[#f97316]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}
