import { FLIREEvent } from "@/types/flire"

type Props = {
  event: FLIREEvent

}

export default function EventsFliresCard({ event }: Props) {
const formattedDate = new Date(event.beginTime).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });

  return (
    <article
      className="flex flex-col h-full gap-6 bg-blue-900 p-4 rounded-2xl border border-blue-600">
        <h3 className="text-lg font-bold leading-tight">{formattedDate}</h3>
    </article>
  )
}