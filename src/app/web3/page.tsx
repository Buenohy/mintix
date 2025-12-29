"use client";

import { useUserNfts } from "@/hooks/use-user-nfts";
import Header from "@/components/layout/Header";
import LoadingState from "@/components/ui/LoadingState";

import { motion } from "framer-motion";

export default function Web3() {
  const { data: nfts, isLoading, isError } = useUserNfts();

  if (isLoading) return <LoadingState />;
  if (isError)
    return (
      <p className="mt-10 text-center text-white">Error loading tickets.</p>
    );

  return (
    <div className="font-inter flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-[#050810]">
      <main className="flex min-h-screen w-full max-w-360 flex-col overflow-x-hidden shadow-2xl">
        <Header />
        <div className="flex w-full flex-col gap-5 p-3.5 md:p-7.5">
          <h1 className="text-2xl font-bold text-white">
            Your Event Tickets (NFTs)
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {nfts?.map((nft) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={nft.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 shadow-sm"
              >
                <h4 className="font-bold text-white">{nft.name}</h4>
                <p className="mt-1 truncate font-mono text-xs text-zinc-500">
                  {nft.id}
                </p>
                <div className="border-primary-mintix/20 bg-primary-mintix/10 text-primary-mintix mt-3 inline-block rounded border px-2 py-1 text-sm">
                  Solana Core Asset
                </div>
              </motion.div>
            ))}

            {nfts && nfts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-zinc-500">
                  No tickets found in this wallet.
                </p>
                <p className="text-xs text-zinc-600">
                  Make sure you are on Devnet and have Metaplex Core NFTs.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
