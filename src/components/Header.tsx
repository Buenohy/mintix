import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="bg-[#111723 ] px-7.5 py-6 flex justify-between items-center ">
      <h2 className="font-normal text-base mr-165.25">Event Management / Events</h2>
      <SearchBar />
    </div>
  )
} 
