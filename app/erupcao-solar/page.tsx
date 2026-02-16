export default async function ErupcaoSolar() {

    const response = await fetch(
        "https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=Eoe2cXu98FEadNhvnhwH2EzbXMfjK6xT0RE4hzgs"
    )
    const data = await response.json();

    return(
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <h1 className="font-bold text-2xl">Erupções Solares</h1>
            </div>
        </main>
    )
    
}