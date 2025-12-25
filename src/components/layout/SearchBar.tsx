import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="border-primary-border bg-glass-gradient focus-within:border-primary-mintix flex h-9 w-60 shrink-0 items-center gap-3 rounded-lg border px-3 transition-all sm:w-65">
      <IoIosSearch className="text-white-mintix shrink-0" size={20} />

      <input
        type="search"
        placeholder={placeholder}
        className="text-white-mintix placeholder:text-white-mintix w-full bg-transparent text-xs font-normal outline-none"
      />
    </div>
  );
}
