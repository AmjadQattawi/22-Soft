import Mockup from "../../assets/hero/Mockup.webp";

export default function OverviewVisual() {
  return (
    <div className="flex justify-center">
      <img
        src={Mockup}
        alt="22-Gold DX"
        className="w-full max-w-2xl object-contain"
      />
    </div>
  );
}