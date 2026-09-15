import { useEffect, useState } from "react";
import SectionContainer from "../csscomponents/SectionContainer"
import { featuresList } from "./featuresData";
import FeatureTabsList from "./FeatureTabsList";
import FeatureWindowPreview from "./FeatureWindowPreview";
import FeatureHeader from "./FeatureHeader";

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featuresList.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <SectionContainer
      id="features"
      className="bg-slate-100/70  "
      divclassName="gap-1 lg:gap-2"
    >
      {/* Feature Header  */}
      <FeatureHeader />

      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <FeatureTabsList
          features={featuresList}
          activeIdx={activeIdx}
          onSelectTab={setActiveIdx}
        />

        <FeatureWindowPreview feature={featuresList[activeIdx]} />
      </div>
    </SectionContainer>
  );
}
