import OverviewHeader from "./OverviewHeader";
import OverviewDetails from "./OverviewDetails";
import OverviewVisual from "./OverviewVisual";

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <OverviewHeader />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <OverviewDetails />
          <OverviewVisual />
        </div>
      </div>
    </section>
  );
}