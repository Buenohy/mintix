import Image from "next/image";

type UserProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

export default function User({ name, role, avatarUrl }: UserProps) {
  return (
    <div className="hidden items-center justify-center gap-3 lg:flex">
      <div>
        <Image
          src={avatarUrl}
          alt={name}
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white-mintix text-base font-semibold">
          {name}
        </span>
        <span className="text-gray-mintix">{role}</span>
      </div>
    </div>
  );
}
