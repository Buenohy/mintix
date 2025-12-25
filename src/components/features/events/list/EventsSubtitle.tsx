export default function EventsSubtitle() {
  return (
    <div className="border-primary-border hidden grid-cols-13 border-b py-4.5 md:grid">
      <span className="text-gray-mintix col-span-4 text-xs font-normal">
        Event Name
      </span>
      <span className="text-gray-mintix col-span-2 text-xs font-normal">
        Data & Time
      </span>
      <span className="text-gray-mintix col-span-2 text-xs font-normal">
        Location
      </span>
      <span className="text-gray-mintix col-span-2 text-xs font-normal">
        Tickets Sold
      </span>
      <span className="text-gray-mintix col-span-2 text-xs font-normal">
        Status
      </span>
      <span className="col-span-1"></span>
    </div>
  );
}
