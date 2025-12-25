import Image from "next/image";

export default function CardGameTeams() {
  return (
    // Removido largura e altura fixas. Adicionado h-full para alinhar com o card ao lado.
    <div className="border-primary-border flex h-full w-full flex-col gap-3 rounded-xl border bg-[#050810]/50 px-6 py-5">
      <div className="flex items-center justify-between">
        <span className="text-gray-mintix text-xs font-normal">Teams</span>
        <button className="text-gray-mintix hover:text-white-mintix text-xs font-normal transition-colors">
          See all
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/gastonia-ghost-peppers.png"
            alt="Team Logo"
            width={30}
            height={30}
            className="rounded-full bg-[#93c5fd] p-0.5"
          />
          <span className="text-white-mintix truncate text-sm font-normal">
            Gastonia Ghost Peppers
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/images/charleston-dirty-birds.png"
            alt="Team Logo"
            width={30}
            height={30}
            className="rounded-full bg-white p-0.5"
          />
          <span className="text-white-mintix truncate text-sm font-normal">
            Charleston Dirty Birds
          </span>
        </div>
      </div>
    </div>
  );
}
