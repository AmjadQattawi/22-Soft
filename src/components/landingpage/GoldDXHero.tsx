import LaptopMockup from "../../assets/mockup/DesktopApp.png";
import MobileMockup from "../../assets/mockup/MobileApp.png";

export default function GoldDXHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 py-20  text-center lg:px-8 lg:pt-24">
        
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
  22-Gold DX Jewelry ERP
</span>

<h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#18395b] sm:text-5xl">
  Experience 22-Gold DX
  <span className="block text-[#f97316]">
    Request Your Demo
  </span>
</h1>

{/* <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
  Discover how 22-Gold DX helps you manage inventory, sales, accounting,
  and daily jewelry operations through one specialized ERP solution.
</p> */}

<div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="#request-demo"
    className="rounded-lg bg-[#f97316] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#ea580c]"
  >
    Request a Demo
  </a>

  <a
    href="#features"
    className="rounded-lg border border-[#f97316] bg-white px-7 py-3 text-sm font-semibold text-[#f97316] transition hover:bg-orange-50"
  >
    Explore Features
  </a>
</div>
{/* 
        <div className="relative mx-auto mt-14 max-w-4xl">
          <img
            src={LaptopMockup}
            alt="22-Gold DX Desktop Application"
            className="mx-auto w-full max-w-3xl object-contain drop-shadow-[0_25px_45px_rgba(15,23,42,0.18)]"
          />

          <img
            src={MobileMockup}
            alt="22-Gold DX Mobile Application"
            className="absolute -bottom-8 right-[12%] w-[18%] max-w-36 object-contain drop-shadow-[0_15px_25px_rgba(15,23,42,0.25)]"
          />
        </div> */}

      </div>
    </section>
  );
}