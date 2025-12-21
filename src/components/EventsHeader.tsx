import ConfigButton from "./ui/CustomButton";
import FilterButton from "./ui/FilterButton";
import SearchBar from "./SearchBar";
import CreateEventButton from "./ui/CreateEventButton";

export default function EventsHeader() {
  return (
    <div className="flex items-center">
      <div className="flex gap-1 mr-150">
        <span className="text-white-mintix">Events</span>
        <span className="text-gray-mintix">(1,205)</span>
      </div>
      <div className="flex gap-3 items-center">
        <SearchBar 
        placeholder="Search by event, location"
        />
        <FilterButton />
        <ConfigButton size={20}/>
        <CreateEventButton />
      </div>
    </div>
  )
}
