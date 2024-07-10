import { ModeToggle } from "@/components/toggle-dark-mode";
import { Sidebar } from "./_components/sidebar";
import { Navigation } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-64 hidden md:block ">
        <Sidebar />
      </div>
      <div className="w-full py-5 h-screen">
        <div className="flex justify-around">
          <Navigation />
          <ModeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}
