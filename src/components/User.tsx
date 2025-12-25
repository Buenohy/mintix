import Image from "next/image";

export default function User() {
  return (
    <div className="hidden items-center justify-center gap-3 lg:flex">
      <div>
        <Image
          src="/images/smiling-woman-looking-front-delighted.png"
          alt="Smilling woman"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white-mintix text-base font-semibold">
          Hailey Carter
        </span>
        <span className="text-gray-mintix">Master Admin</span>
      </div>
    </div>
  );
}
