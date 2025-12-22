import Image from "next/image";
import StatusInfo from "./StatusInfo";
import IconButton from "./ui/IconButton";
import CardGameLocal from "./CardGameLocal";
import CardGameOrganizer from "./CardGameOrganizer";

import { LuPencilLine } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
export default function CardGameInfo() {
  return (
    <div className="border-primary-border flex w-289.5 flex-col gap-6 rounded-xl border px-6 py-5">
      <div>
        <Image src="/images/background.png" alt="" width={708} height={196} />
      </div>
      <div className="flex items-center">
        <div>
          <Image
            src="/images/gastonia-ghost-peppers.png"
            alt=""
            width={105}
            height={105}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-8.75">
          <span className="text-2xl font-bold">
            Gastonia Ghost Peppers <br /> vs. Charleston Dirty Bir...
          </span>
          <StatusInfo />
          <div className="flex items-center gap-3">
            <IconButton icon={LuPencilLine} size={16} className="px-2 py-1.5" />
            <IconButton icon={MdBlock} size={16} className="px-2 py-1.5" />
            <IconButton
              icon={FaRegTrashAlt}
              size={16}
              className="px-2 py-1.5"
            />
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
      <div className="flex items-center gap-3">
        <CardGameLocal />
        <div className="flex flex-col gap-3">
          <CardGameOrganizer
            title="Policy"
            subtitle="Gastonia Ghost Peppers Policy"
          />
          <CardGameOrganizer
            title="Organizer"
            subtitle="Gastonia Ghost Peppers"
          />
        </div>
      </div>
    </div>
  );
}
