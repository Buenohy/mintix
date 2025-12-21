import { IoNotificationsOutline } from "react-icons/io5";

export default function NotificationIcon() {
  return (
    <div className="relative inline-block">
      <div className="flex items-center justify-center border border-white/10 rounded-full p-2.5 bg-primary-background/5">
        <button className="text-white-mintix">
          <IoNotificationsOutline size={20} />
        </button>
      </div>
      <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center bg-primary-mintix text-white text-[11px] font-bold px-2 py-0.5 rounded-full min-w-5 h-5">
        4
      </span>
    </div>
  );
}