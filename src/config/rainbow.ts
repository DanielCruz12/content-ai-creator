import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { wallets } from "../utils/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "IntmaxWalletSDK",
      wallets: wallets,
    },
  ],
  { projectId: "N/A", appName: "Dandev" }
);

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors,
});
