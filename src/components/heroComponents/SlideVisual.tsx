interface SlideVisualProps {
  renderVisual: (() => React.ReactNode) | null;
}

export default function SlideVisual({ renderVisual }: SlideVisualProps) {
  if (!renderVisual) return null;

  return (
    <div className="lg:col-span-7 flex justify-center items-center">
      {renderVisual()}
    </div>
  );
}