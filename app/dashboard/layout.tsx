import { ModeToggle } from "@/components/toggle-dark-mode";
import { Sidebar } from "./_components/sidebar";
import { Navigation } from "@/components/navbar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import AsideContent from "./_components/aside-content";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen">
      <aside className="fixed hidden lg:block top-0 left-0 w-[250px] h-screen p-4 z-20">
        <Sidebar />
      </aside>

      <main className="flex-1 lg:ml-[300px] lg:mr-[300px] min-h-screen p-4">
        <header className="py-3 px-5 rounded-lg flex justify-between items-center sticky top-0 z-10 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="block md:hidden">
              <Navigation />
            </div>
            <div className="hidden md:block">
              <ConnectButton />
            </div>
            <ModeToggle />
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>

        <div className="mt-4 flex-1 overflow-y-auto">{children}</div>
      </main>

      <aside className="fixed overflow-auto hidden lg:block top-0 right-0 w-[270px] h-screen p-4 z-20">
        <AsideContent />
      </aside>
    </div>
  );
}
