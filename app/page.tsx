import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Home() {
  const cookieStore = cookies();
  const session = cookieStore.get("__session");

  return (
    <div className="relative overflow-hidden py-24 lg:py-32 px-7">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
        <div className="bg-gradient-to-tl blur-2xl w-[100rem] h-[38rem] md:h-[40rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
      </div>
      <div className="flex justify-center">
        <a
          className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
          href="#"
        >
          Beta version
          <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </a>
      </div>

      <div className="mt-5 max-w-2xl text-center mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Let&apos;s build and share Together
        </h1>
      </div>
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="md:text-xl text-base text-muted-foreground">
          DanDevAI is a platform where you can find prompts of the community
          that you can Share, comment and posts with others sharing your ideas
          and projects.
        </p>
      </div>
      <div className="mt-8 gap-3 flex justify-center">
        {session?.value ? (
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <SignedOut>
            <SignInButton />
          </SignedOut>
        )}

        <Button size={"lg"} variant={"outline"}>
          Learn more
        </Button>
      </div>
      <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span className="text-sm text-muted-foreground">Build prompts:</span>
        <span className="text-sm font-bold">I want to... </span>
        <svg
          className="h-5 w-5 text-muted-foreground"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <span className="inline-flex items-center gap-x-1 text-sm decoration-2 font-medium">
          I desire to...
          <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
