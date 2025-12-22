import CardEventSummary from "./CardEventSummary";

export default function EventSummary() {
  return (
    <div className="border border-primary-border rounded-xl p-5">
      <span>Event Summary</span>
      <CardEventSummary 
      title="Total Tickets Sold"
      value="2,000"
      />
      <CardEventSummary 
      title="Total Revenue"
      value="$87,120"
      />
      <CardEventSummary 
      title="Unique Attendees"
      value="1,398"
      />
    </div>
  )
}
