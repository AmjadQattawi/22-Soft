import { useState } from "react";

export default function GoldDXHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-linear-to-b from-orange-50 via-white to-white">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center lg:px-8 lg:py-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c2410c] sm:text-sm">
          22-Gold DX Jewelry ERP
        </span>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#18395b] sm:text-4xl lg:text-5xl">
          Jewelry Inventory Software
          <span className="block text-[#f97316]">
            Built for Modern Jewelry Businesses
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Discover 22-Gold DX, a specialized jewelry ERP for inventory, sales,
          invoicing, reporting, mobile operations, and RFID inventory tracking.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
<a
  href="#request-demo"
  className="rounded-lg bg-[#c2410c] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
>
  Request a Demo
</a>

<button
  type="button"
  onClick={() => setVideoOpen(true)}
  className="rounded-lg border border-[#18395b] px-6 py-2.5 text-sm font-semibold text-[#18395b] transition hover:bg-slate-100"
>
  ▶ Watch Demo
</button>

<a
  href="#features"
  className="rounded-lg border border-[#c2410c] px-6 py-2.5 text-sm font-semibold text-[#c2410c] transition hover:bg-orange-50"
>
  Explore Features
</a>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black"
            >
              ✕
            </button>

            <video controls autoPlay className="w-full">
              <source src="/gold_dx_demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
