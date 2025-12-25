import Image from "next/image";
import IconButton from "../../../ui/IconButton";
import CardGameLocal from "./CardGameLocal";
import CardGameOrganizer from "./CardGameOrganizer";
import { LuPencilLine } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import DraftStatus from "../../../ui/DraftStatus";

export default function CardGameInfo() {
  return (
    <div className="border-primary-border flex w-full flex-col gap-6 rounded-xl border bg-[#050810]/50 px-4 py-5 md:px-6">
      <div className="relative h-48 w-full md:h-60">
        <Image
          src="/images/baseball-field.jpg"
          alt="Banner"
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 px-2 md:flex-row md:items-start md:gap-6">
        <div className="relative z-10 -mt-12 self-start md:-mt-16">
          <div className="rounded-full bg-[#0b1120] p-1.5 shadow-xl">
            <div className="h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28">
              <Image
                src="/images/gastonia-ghost-peppers.png"
                alt="Logo"
                width={112}
                height={112}
                className="bg-[#93c5fd] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-white-mintix text-lg leading-tight font-bold md:text-xl">
            Gastonia Ghost Peppers <br className="hidden md:block" />
            vs. Charleston Dirty Birds
          </h2>

          <div className="flex items-center gap-3">
            <DraftStatus />
            <div className="flex gap-2">
              <IconButton icon={LuPencilLine} />
              <IconButton icon={MdBlock} />
              <IconButton icon={FaRegTrashAlt} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-mintix text-sm leading-relaxed">
        The Gastonia Ghost Peppers are a professional baseball team based in
        Gastonia, NC, bringing exciting games and a passionate fan experience to
        the local community.
      </p>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="flex-1">
          <CardGameLocal />
        </div>
        <div className="flex min-w-70 flex-col gap-3">
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
