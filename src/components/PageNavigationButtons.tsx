import { useNavigate, useLocation } from "react-router-dom";

const pageFlow = ["/",  "/clients", "/about"];
// "/features",
export default function PageNavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pageFlow.indexOf(location.pathname);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < pageFlow.length - 1;

  const goToPrev = () => {
    if (hasPrev) {
      navigate(pageFlow[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigate(pageFlow[currentIndex + 1]);
    }
  };

  if (currentIndex === -1) return null;

  return (
    <>
      {hasPrev && (
        <button
          onClick={goToPrev}
          aria-label="Previous Page"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-[#a8c5e2] hover:bg-[#becad6] text-slate-800 p-3 rounded-full shadow-xl border border-slate-200/80 backdrop-blur-md transition-all active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          onClick={goToNext}
          aria-label="Next Page"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 bg-[#a8c5e2] hover:bg-[#becad6] text-slate-800 p-3 rounded-full shadow-xl border border-slate-200/80 backdrop-blur-md transition-all active:scale-95"
        >
          <svg className="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  );
}