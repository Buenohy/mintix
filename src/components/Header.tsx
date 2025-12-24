import NotificationButton from "./ui/NotificationButton";
import SearchBar from "./SearchBar";
import User from "./User";

export default function Header() {
  return (
    <div className="bg-[#111723 ] flex w-full items-center justify-between px-7.5 py-6">
      <h2 className="text-base font-normal">Event Management / Events</h2>
      <div className="flex items-center justify-center gap-8">
        <SearchBar placeholder="Search for anything" />
        <NotificationButton />
        <User />
      </div>
    </div>
  );
}
