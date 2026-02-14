export default async function Teste() {
  const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?source=InciWeb,EO')
  const data = await response.json()
  return (
    <div>
      {data.events.map((event) => (
        <div>
          <h3 key={event.id}>{event.title} - {event.id}</h3>
          {event.sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="blank">
                {source.id}
              </a>
            </li>
          ))}
          {
            event.geometries.map((geometrie) => (
              <h3 key={geometrie.date}>{geometrie.coordinates}</h3>
            ))
          }
        </div>
      ))}
    </div>
  )
}
