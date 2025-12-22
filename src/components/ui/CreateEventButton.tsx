import { FaPlus } from "react-icons/fa";

interface CreateEventButtonProps {
  title: string;
}

export default function CreateEventButton({ title }: CreateEventButtonProps) {
  return (
    <div className="border-primary-mintix/50 from-primary-mintix/30 to-primary-mintix/30 rounded-lg border bg-linear-to-r">
      <button>
        <div className="flex items-center gap-2 px-2 py-[11.5px]">
          <FaPlus size={20} />
          <span>{title}</span>
        </div>
      </button>
    </div>
  );
}
