"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HeaderSkeleton from "../ui/HeaderSkeleton";
import NotificationButton from "../ui/NotificationButton";
import SearchBar from "./SearchBar";
import User from "./User";

import { useUser } from "@/hooks/use-events";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { data: userData, isLoading } = useUser();

  if (isLoading) return <HeaderSkeleton />;
  return (
    <nav className="w-full bg-[#0f1521] px-3.5 py-6 md:px-7.5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/mintix-logo.png"
              alt="Mintix Logo"
              width={140}
              height={50}
            />
          </Link>
          <div>
            <Link href="/web3">
              <h2 className="text-primary-mintix text-2xl">Web3</h2>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="w-full md:w-64 lg:w-80">
            <SearchBar placeholder="Search for anything" />
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <NotificationButton />
            <User
              name={userData?.name || "Hailey Carter"}
              role={userData?.role || "Master Admin"}
              avatarUrl={
                userData?.avatarUrl ||
                "/images/smiling-woman-looking-front-delighted.png"
              }
            />
            <div className="hidden sm:flex">
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
