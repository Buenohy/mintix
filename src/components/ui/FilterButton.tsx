import { IoMdArrowDropdown } from "react-icons/io";

export default function FilterButton() {
  return (
    <div className="flex items-center justify-center border border-primary-border rounded-lg py-1.5 px-2 cursor-pointer gap-3 bg-glass-gradient">
      <span className="font-normal text-xs text-gray-mintix">Filter</span>
      <button className="text-white-mintix">
        <IoMdArrowDropdown  size={20} />
      </button>
    </div>
  )
}
