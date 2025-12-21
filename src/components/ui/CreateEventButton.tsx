import { FaPlus } from "react-icons/fa";

export default function CreateEventButton() {
  return (
    <div className="border rounded-lg border-primary-mintix/50 bg-linear-to-r from-primary-mintix/30 to-primary-mintix/30">
      <button>
        <div className="flex gap-2 px-2 py-[11.5px] items-center">
          <FaPlus size={20} />
          <span>Create Event</span>
        </div>
      </button>
    </div>
  )
}
