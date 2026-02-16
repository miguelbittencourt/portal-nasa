import { FLIREEvent } from "@/types/flire";
import EventsFliresCard from "./EventsFliresCard";


type Props = {
    events: FLIREEvent[];
};

export default function EventsFlires({ events }: Props){
    return(
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event: FLIREEvent) => (
                          <EventsFliresCard key={event.flrID} event={event}/>
                        ))}
            </div>
        </main>
    )
}