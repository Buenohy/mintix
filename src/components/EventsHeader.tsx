import IconButton from "./ui/IconButton";
import FilterButton from "./ui/FilterButton";
import SearchBar from "./SearchBar";
import CreateEventButton from "./ui/CreateEventButton";
import { FaPlus } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";

export default function EventsHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-white-mintix text-xl font-semibold">Events</span>
        <span className="text-gray-mintix text-sm">(1,205)</span>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
        <div className="w-full sm:flex-1 lg:w-64 xl:w-80">
          <SearchBar placeholder="Search by event, location" />
        </div>

        <div className="flex shrink-0 items-center justify-between gap-2 sm:justify-end sm:gap-3">
          <FilterButton />
          <IconButton icon={HiOutlineUpload} />

          <div className="flex-1 sm:flex-none">
            <CreateEventButton icon={FaPlus} title="Create Event" />
          </div>
        </div>
      </div>
    </div>
  );
}
