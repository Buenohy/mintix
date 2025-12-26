"use client";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fetchAssetsByOwner, AssetV1 } from "@metaplex-foundation/mpl-core";
import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";

type SimpleNFT = {
  id: string;
  name: string;
  uri: string;
};

export const useUserNfts = () => {
  const wallet = useWallet();

  const endpoint =
    process.env.NEXT_PUBLIC_SOLANA_RPC || "https://api.devnet.solana.com";

  return useQuery<SimpleNFT[]>({
    queryKey: ["user-nfts", wallet.publicKey?.toBase58()],
    queryFn: async () => {
      if (!wallet.publicKey) return [];

      const umi = createUmi(endpoint).use(walletAdapterIdentity(wallet));

      try {
        const assets = await fetchAssetsByOwner(umi, umi.identity.publicKey);

        return assets.map((asset: AssetV1) => ({
          id: asset.publicKey.toString(),
          name: asset.name,
          uri: asset.uri,
        }));
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        throw new Error("Failed to fetch NFTs");
      }
    },
    enabled: !!wallet.publicKey,
    staleTime: 1000 * 60 * 5,
  });
};
