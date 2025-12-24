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
    <div className="flex items-center gap-2">
      <IconButton
        icon={LuChevronLeft}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      <div className="bg-primary-background border-primary-border flex items-center gap-1 rounded-xl border p-1">
        {/* Lógica para gerar os números das páginas */}
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={cn(
              "rounded-lg px-4 py-1.5 text-sm font-medium",
              currentPage === page
                ? "border-primary-mintix/50 from-primary-mintix/30 to-primary-mintix/30 border bg-linear-to-r text-white"
                : "text-gray-400",
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
      />
    </div>
  );
}
