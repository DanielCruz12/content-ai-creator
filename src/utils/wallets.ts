import { intmaxwalletsdk } from "intmax-walletsdk/rainbowkit";

export const wallets = [
  intmaxwalletsdk({
    wallet: {
      url: "https://wallet.intmax.io",
      name: "INTMAX Wallet",
      iconUrl: "https://wallet.intmax.io/favicon.ico",
    },
    metadata: {
      name: "Dandev app",
      description: "Dandev app",
      icons: ["https://intmaxwallet-sdk-wallet.vercel.app/vite.svg"],
    },
  }),
];

export const additionalWallets = [
  intmaxwalletsdk({
    wallet: {
      url: "https://intmaxwallet-sdk-wallet.vercel.app/",
      name: "IntmaxWalletSDK Demo",
      iconUrl: "https://intmaxwallet-sdk-wallet.vercel.app/vite.svg",
    },
    metadata: {
      name: "Dandev app",
      description: "Dandev app",
      icons: ["https://intmaxwallet-sdk-wallet.vercel.app/vite.svg"],
    },
  }),
  intmaxwalletsdk({
    mode: "iframe",
    wallet: {
      url: "https://intmaxwallet-sdk-wallet.vercel.app/",
      name: "IntmaxWalletSDK Demo",
      iconUrl: "https://intmaxwallet-sdk-wallet.vercel.app/vite.svg",
    },
    metadata: {
      name: "Dandev app",
      description: "Dandev app",
      icons: ["https://intmaxwallet-sdk-wallet.vercel.app/vite.svg"],
    },
  }),
  intmaxwalletsdk({
    wallet: {
      url: "https://wallet.intmax.io",
      name: "INTMAX Wallet",
      iconUrl: "https://wallet.intmax.io/favicon.ico",
    },
    metadata: {
      name: "Dandev app",
      description: "Dandev app",
      icons: ["https://intmaxwallet-sdk-wallet.vercel.app/vite.svg"],
    },
  }),
];
