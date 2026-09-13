import { useState } from "react";

import DemoProductVisual from "./DemoProductVisual";
import DemoForm from "./DemoForm";
import DemoSuccess from "./DemoSuccess";

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="request-demo"
      className="bg-linear-to-b from-white via-orange-50/20 to-white  "
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid items-stretch lg:grid-cols-2">
            {/* Product Visual */}
            <DemoProductVisual />

            {/* Demo Form */}
            <div className="flex items-center p-8 sm:p-10 lg:px-14 lg:py-3">
              <div className="w-full">
                {!submitted ? (
                  <DemoForm submitted={submitted} setSubmitted={setSubmitted} />
                ) : (
                  <DemoSuccess  setSubmitted={setSubmitted} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
