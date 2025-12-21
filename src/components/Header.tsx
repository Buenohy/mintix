import NotificationIcon from "./NotificationIcon";
import SearchBar from "./SearchBar";
import User from "./User";

export default function Header() {
  return (
    <div className="bg-[#111723 ] px-7.5 py-6 flex justify-between items-center ">
      <h2 className="font-normal text-base mr-145.25">Event Management / Events</h2>  
      <div className="flex gap-8 items-center justify-center">
      <SearchBar />
      <NotificationIcon />
      <User />
      </div>
    </div>
  )
} 
