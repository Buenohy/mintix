import Image from "next/image"

export default function User() {
  return (
    <div className="flex gap-3 items-center justify-center">
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
        <span className="text-base font-semibold text-white-mintix">Hailey Carter</span>
        <span className="text-gray-mintix">Master Admin</span>
      </div>
    </div>
  )
}
