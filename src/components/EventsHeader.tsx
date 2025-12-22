import IconButton from "./ui/IconButton";
import FilterButton from "./ui/FilterButton";
import SearchBar from "./SearchBar";
import CreateEventButton from "./ui/CreateEventButton";
import { FaPlus } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";

export default function EventsHeader() {
  return (
    <div className="flex items-center">
      <div className="mr-150 flex gap-1">
        <span className="text-white-mintix">Events</span>
        <span className="text-gray-mintix">(1,205)</span>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar placeholder="Search by event, location" />
        <FilterButton />
        <IconButton icon={HiOutlineUpload} />
        <CreateEventButton icon={FaPlus} title="Create Event" />
      </div>
    </div>
  );
}
