import { ModeToggle } from "@/components/toggle-dark-mode";
import { Sidebar } from "./_components/sidebar";
import { Navigation } from "@/components/navbar";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden dark:bg-[#030303]">
      <aside className="w-56 hidden md:block fixed inset-y-0 z-20">
        <Sidebar />
      </aside>
      <main className="flex-1 md:ml-52 px-5 md:px-0">
        <header className="flex justify-between items-center py-3 bg-[#f8f8f8] dark:bg-[#000] top-0 w-full z-10  md:px-10">
          <div className="flex items-center gap-5 ">
            <Navigation />
            <ModeToggle />
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <div className="h-screen overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
