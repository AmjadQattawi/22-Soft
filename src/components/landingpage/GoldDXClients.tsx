import ClientsSlider from "../clients/ClientsSlider";

export default function GoldDXClients() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        {/* CLIENTS SLIDER */}
        <div className="mt-10">
          <ClientsSlider />
        </div>
      </div>
    </section>
  );
}
