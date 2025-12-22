import Image from "next/image";
import StatusInfo from "./StatusInfo";
import CustomButton from "./ui/CustomButton";
import CardGameLocal from "./ui/CardGameLocal";

export default function CardGameInfo() {
  return (
    <div className="border-primary-border w-289.5 rounded-xl border px-6 py-5">
      <div>
        <Image src="/images/background.png" alt="" width={708} height={196} />
      </div>
      <div className="flex items-center">
        <div>
          <Image
            src="/images/events-datails.png"
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
          <div className="flex gap-3">
            <CustomButton size={20} />
            <CustomButton size={20} />
            <CustomButton size={20} />
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
      <div>
        <CardGameLocal />
      </div>
    </div>
  );
}
