import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type StepPaginationProps = {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
};

export default function StepPagination({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
}: StepPaginationProps) {
  return (
    <div className="flex h-3 w-23.5 shrink-0 items-center justify-between">
      <button
        onClick={onPrev}
        disabled={currentStep === 0}
        className="cursor-pointer text-white transition-colors hover:text-gray-400 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <LuChevronLeft size={16} strokeWidth={3} />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentStep
                ? "bg-white-mintix h-2 w-2"
                : "bg-gray-mintix h-1.5 w-1.5"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="text-white-mintix hover:text-gray-mintix cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-30"
      >
        <LuChevronRight size={16} strokeWidth={3} />
      </button>
    </div>
  );
}
