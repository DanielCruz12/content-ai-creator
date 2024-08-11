import { wallets } from "@/utils/wallets";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig, http } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

/* export const defaultConfig = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // Enable server-side rendering if needed
});
 */

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
