import NotificationButton from "../ui/NotificationButton";
import SearchBar from "./SearchBar";
import User from "./User";

export default function Header() {
  return (
    <nav className="w-full px-4 py-6 md:px-7.5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-sm font-normal text-gray-400 md:text-base">
          Event Management /{" "}
          <span className="font-bold text-white">Events</span>
        </h2>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="w-full md:w-64 lg:w-80">
            <SearchBar placeholder="Search for anything" />
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <NotificationButton />
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
}
