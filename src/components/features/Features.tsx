import { useState } from "react";
import SectionContainer from "../cssComponents/SectionContainer";
import FeatureHeader from "../featuresComponents/FeatureHeader";
import { featuresList } from "./featuresData";
import FeatureTabsList from "./FeatureTabsList";
import FeatureWindowPreview from "./FeatureWindowPreview";

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <SectionContainer id="features" className="bg-slate-100/70 ">
      {/* Feature Header  */}
      <FeatureHeader />

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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