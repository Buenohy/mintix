import { MdKeyboardArrowLeft } from "react-icons/md";

export default function ChangePages() {
  return (
    <div>
      <div className="w-42 border rounded-lg p-1 items-center justify-center border-primary-border mt-12">
        <div className="flex gap-2 items-center">
          <span className="text-gray-mintix text-xs font-medium text-center px-2 ">1</span>
          <span className="text-white-mintix text-xs font-medium  border-primary-mintix/50 bg-linear-to-r from-primary-mintix/30 to-primary-mintix/30 p-2 rounded-md border text-center cursor-pointer">2</span>
          <span className="text-gray-mintix text-xs font-medium text-center px-2 ">3</span>
          <span className="text-gray-mintix text-xs font-medium text-center px-2 ">4</span>
          <span className="text-gray-mintix text-xs font-medium text-center px-2 ">5</span>
        </div>
      </div>
    </div>
  )
}
