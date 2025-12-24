import IconButton from "./IconButton";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex h-8 items-center gap-4">
      <IconButton
        icon={LuChevronLeft}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-full w-8"
      />

      <div className="border-primary-border flex h-full items-center gap-2 rounded-xl border bg-[#0b1120] p-1">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-full cursor-pointer items-center justify-center rounded-lg text-sm font-medium transition-all",
              currentPage === page
                ? "border-primary-mintix text-white-mintix aspect-square border bg-blue-500/20"
                : "text-gray-mintix hover:text-white-mintix px-3",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <IconButton
        icon={LuChevronRight}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-full w-8"
      />
    </div>
  );
}
