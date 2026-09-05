import React from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({
  id,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 md:px-10 py-12 md:py-16 lg:py-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:gap-10">
        {children}
      </div>
    </section>
  );
}
