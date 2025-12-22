import Image from "next/image";

export default function CardGameTeams() {
  return (
    <div className="border-primary-border h-33.25 w-[320px] rounded-xl border">
      <div className="flex flex-col gap-3 px-6 py-5">
        <div className="flex justify-between">
          <span className="text-gray-mintix text-xs font-normal">Teams</span>
          <span className="text-gray-mintix text-xs font-normal">See all</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/gastonia-ghost-peppers.png"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-white-mintix text-sm font-normal">
            Gastonia Ghost Peppers
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/charleston-dirty-birds.png"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-white-mintix text-sm font-normal">
            Charleston Dirty Birds
          </span>
        </div>
      </div>
    </div>
  );
}
