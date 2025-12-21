import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({placeholder}: SearchBarProps) {
  return (
    <div className="flex gap-3 items-center py-2 px-3 border rounded-lg w-65 h-8 bg-glass-gradient border-primary-border focus-within:border-primary-mintix transition-all">
      <IoIosSearch className="text-white-mintix shirk-0" size={15}/>
      <input 
        type="search" 
        placeholder={placeholder} 
        className="bg-transparent text-white-mintix placeholder:text-white-mintix outline-none w-full font-normal text-xs" 
      />
      
    </div>
  )
}