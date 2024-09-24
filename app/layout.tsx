import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DanDevAI | AI Content Creation Platform | Share Prompts & Ideas",
  description:
    "DanDevAI is a community-driven platform for sharing, commenting, and posting AI prompts and ideas. Streamline your AI-powered content creation process and collaborate with others.",
  keywords: [
    "AI content creation",
    "AI prompts",
    "DanDevAI",
    "content creation platform",
    "share AI ideas",
    "AI-generated content",
    "collaborate on AI projects",
    "AI content management",
  ],
  openGraph: {
    type: "website",
    url: "https://dandevcreator.com", // Adjust the URL to your actual domain
    title: "DanDevAI | Share AI Prompts, Ideas, and Projects",
    description:
      "Discover and share community AI prompts, collaborate on ideas, and manage AI-generated content all in one place with DanDevAI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
