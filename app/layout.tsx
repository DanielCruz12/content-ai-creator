"use client";
import { useMemo } from "react";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
/* import { Analytics } from "@vercel/analytics/react"
 */
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "@/src/config/rainbow";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "iconButton",
            },
          }}
        >
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider coolMode theme={darkTheme()}>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <SpeedInsights />
                  <NextTopLoader />
                  {/*   <Analytics/> */}
                  {children}
                  <Toaster />
                </ThemeProvider>
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
