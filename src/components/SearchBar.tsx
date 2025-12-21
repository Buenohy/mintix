import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="flex gap-3 items-center py-2 px-3 border rounded-lg w-65 h-8 bg-linear-to-r from-white/20 to-white/10 border-white/10 focus-within:border-primary-mintix transition-all">
      <IoIosSearch className="text-white-mintix shirk-0" size={15}/>
      <input 
        type="search" 
        placeholder="Search for anything" 
        className="bg-transparent text-white-mintix placeholder:text-white-mintix outline-none w-full font-normal text-xs" 
      />
      
    </div>
  )
}