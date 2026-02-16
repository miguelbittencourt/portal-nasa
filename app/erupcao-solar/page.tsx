import EventsFlires from "@/components/EventsFlires";

export default async function ErupcaoSolar() {
  const response = await fetch(
    "https://api.nasa.gov/DONKI/FLR?startDate=2024-01-01&endDate=2024-01-30&api_key=Eoe2cXu98FEadNhvnhwH2EzbXMfjK6xT0RE4hzgs"
  );

  const data = await response.json();

  return (
    <main className="p-6">
      <h1 className="font-bold text-2xl mb-6">Erupções Solares</h1>

      <EventsFlires events={data} />
    </main>
  );
}
