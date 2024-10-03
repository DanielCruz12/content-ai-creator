import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Script from "next/script";

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
    url: "https://dandevcreator.com",
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*  <meta
          name="google-site-verification"
          content="q_nKN4hBrKNgHd0IqIr4to0C-Cxn_L7gtijzxRKmBME"
        /> */}
        <link rel="icon" href="/dandevlogo.png" type="image/png" />
        <meta
          name="description"
          content="DanDevAI is a leading AI content creation platform where users can share AI prompts, collaborate on projects, and discover new ideas. Enhance your creative process with community-driven AI content and tools."
        />
        <title>
          DanDevAI | Share AI Prompts, Collaborate on AI Projects & Ideas
        </title>
        <meta
          name="keywords"
          content="AI content creation, share AI prompts, AI projects collaboration, DanDevAI platform, community AI tools, AI-powered content, AI-driven ideas, AI project management, AI community, AI innovation"
        />
        <meta name="author" content="DanDevAI Team" />
        <link rel="canonical" href="https://dandevcreator.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dandevcreator.com" />
        <meta
          property="og:title"
          content="DanDevAI | AI Content Creation Platform & Idea Collaboration"
        />
        <meta
          property="og:description"
          content="Join DanDevAI to share and collaborate on AI prompts, explore community projects, and streamline your AI content creation workflow."
        />
        <meta
          property="og:image"
          content="https://dandevcreator.com/dandevlogo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Daniel_CruzD" />
        <meta name="twitter:creator" content="@Daniel_CruzD" />
        <meta
          name="twitter:title"
          content="DanDevAI | Share AI Prompts & Ideas for Content Creation"
        />
        <meta
          name="twitter:description"
          content="DanDevAI enables you to discover, share, and collaborate on AI-generated content and creative ideas within a community-driven platform."
        />
        <meta
          name="twitter:image"
          content="https://dandevcreator.com/dandevlogo.png"
        />

        <Script
          id="metadata"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "dandev",
              "url": "https://dandevcreator.com",
              "logo": "https://dandevcreator.com/dandevlogo.png",
              "description": "DanDevAI is a collaborative AI content creation platform that allows users to share and discover AI prompts, collaborate on AI projects, and enhance creative workflows.",
              "location": {
                "@type": "El Salvador"
              },
               "founder": {
                "@type": "Person",
                "name": "Josué Daniel Cruz Dubón"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+(503) 77886116",
                "contactType": "Customer Service",
                "areaServed": "El Salvador",
                "availableLanguage": "Spanish"
              },
            }
          `,
          }}
        />
        <Script
          id="google-tag-manager"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PLJN8XWHHE"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PLJN8XWHHE');
          `}
        </Script>
      </head>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ClerkProvider
          afterSignOutUrl={"/"}
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
