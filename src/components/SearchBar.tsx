import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="flex gap-3 items-center py-2 px-3 border rounded-lg w-65 bg-linear-to-r from-white/20 to-white/10 border-white/10 focus-within:border-[#0085FE] transition-all">
      <IoIosSearch className="text-[#F1F1F1] w-5 h-5 shirk-0" />
      <input 
        type="search" 
        placeholder="Search for anything" 
        className="bg-transparent text-white placeholder:text-[#F1F1F1] outline-none w-full" 
      />
      
    </div>
  )
}