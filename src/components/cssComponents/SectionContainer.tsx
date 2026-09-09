import React from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  divclassName?:string;
  children: React.ReactNode;
}

export default function SectionContainer({
  id,
  className = "",
  divclassName="",
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 md:px-10 py-3 md:py-4 lg:py-7 ${className}`}
    >
      <div className={`max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10 ${divclassName} `}>
        {children}
      </div>
    </section>
  );
}
