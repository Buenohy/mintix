import { GoGear } from "react-icons/go";

interface CustomButtonProps {
  size: number;
}

export default function CustomButton({size}: CustomButtonProps) {
  return (
    <div className="flex items-center justify-center border border-primary-border rounded-lg p-2.5 bg-primary-background/5 cursor-pointer">
            <button className="text-white-mintix">
              <GoGear size={size} />
            </button>
          </div>
  )
}
