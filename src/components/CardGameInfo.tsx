import Image from "next/image";
import IconButton from "./ui/IconButton";
import CardGameLocal from "./CardGameLocal";
import CardGameOrganizer from "./CardGameOrganizer";

import { LuPencilLine } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import DraftStatus from "./ui/DraftStatus";

export default function CardGameInfo() {
  return (
    <div className="border-primary-border flex w-289.5 flex-col gap-6 rounded-xl border px-6 py-5">
      <div className="max-w-177 overflow-hidden">
        <div className="relative h-49 w-full">
          <Image
            src="/images/baseball-field.jpg"
            alt="Banner"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex items-start gap-4 px-4 pb-6">
          <div className="relative z-10 -mt-10">
            <div className="rounded-full bg-[#0b1120] p-2">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/gastonia-ghost-peppers.png"
                  alt="Logo"
                  width={105}
                  height={105}
                  className="bg-[#93c5fd]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-8.75 pt-4">
            <h2 className="text-white-mintix text-sm leading-8 font-bold tracking-normal text-balance">
              Gastonia Ghost Peppers <br />
              vs. Charleston Dirty Bir...
            </h2>
            <DraftStatus />
            <div className="flex gap-2">
              <IconButton icon={LuPencilLine} />
              <IconButton icon={MdBlock} />
              <IconButton icon={FaRegTrashAlt} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="text-gray-mintix text-sm font-normal">
          The Gastonia Ghost Peppers are a professional baseball team based in
          Gastonia, NC, bringing exciting games and a passionate fan experience
          to the local community.
        </span>
      </div>
      <div className="flex items-stretch gap-3">
        <CardGameLocal />
        <div className="flex flex-col gap-3">
          <CardGameOrganizer
            title="Policy"
            subtitle="Gastonia Ghost Peppers Policy"
          />
          <CardGameOrganizer
            title="Organizer"
            image="/images/gastonia-ghost-peppers.png"
            subtitle="Gastonia Ghost Peppers"
          />
        </div>
      </div>
    </div>
  );
}
