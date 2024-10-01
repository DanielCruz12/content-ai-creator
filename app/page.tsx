/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { cookies } from "next/headers";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import TitleSection from "@/components/title-section";
import Footer from "@/components/footer";

export default function Home() {
  const cookieStore = cookies();
  const session = cookieStore.get("__session");

  return (
    <div className="relative overflow-hidden md:pt-24 lg:pt-26">
      <div className=" pt-10 text-center mx-5">
        <TitleSection
          title="Let's build and share Together"
          subheading="DanDevAI is a platform where you can find prompts of the community
          that you can share, comment and posts with others sharing your ideas
          and projects."
          pill="Beta version"
        />
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
      <div className="mt-8 gap-3 flex justify-center">
        {session?.value ? (
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <Link href={"/sign-up "}>
            <Button variant={"outline"}>Sign up</Button>
          </Link>
        )}

        <Button size={"lg"} className="" disabled variant={"outline"}>
          Learn more
        </Button>
      </div>
      <div
        className="relative
          flex
          items-center
          justify-center
          rounded-lg
          sm:ml-0 sm:w-full "
      >
        <img
          className="rounded-4xl max-w-7xl pt-3 mt-4 hidden md:block"
          src={"/dandev-banner3.png"}
          alt="banner"
        />
        <img
          className="rounded-4xl max-w-7xl pt-3 mt-4 md:hidden"
          src={"/phone3.png"}
          alt="banner"
        />
        <div className="absolute bottom-0 left-0 right-0 top-[70%] z-10 bg-gradient-to-t dark:from-background "></div>
      </div>
      <section className="relative flex mt-12 flex-col items-center justify-center px-4sm:px-6">
        <div
          className="top-22
          absolute
          -z-10
          h-32
          w-[100%]
          max-w-[300px]
          rounded-full
          bg-blue-400
          blur-[120px]
        "
        />
        <TitleSection
          title="Organize and streamline your AI-powered content creation"
          subheading="Capture your ideas, thoughts, and manage your creative process and AI-generated content in one unified platform."
          pill="Features"
        />
        <div
          className="border-washed-purple-300
          relative
          mb-6
          mt-10
          flex
          max-w-[330px]
          items-center
          justify-center
          rounded-2xl
          border-8
          border-opacity-10 
          sm:ml-0
        "
        >
          <img src={"/phone1.png"} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative flex mt-12 flex-col items-center justify-center px-4sm:px-6">
        <div
          className="top-22
          absolute
          -z-10
          h-32
          w-[100%]
          max-w-[300px]
          opacity-30
          rounded-full
          bg-blue-400
          blur-[120px]
        "
        />
        <TitleSection
          title="Hey 👋 I am Daniel Cruz"
          subheading="CEO of DanDev Company"
          pill="About me"
        />
        <span className="text-sm pt-3 px-10 text-center">
          I lead our efforts in the power of AI and software development to
          create innovative solutions.
        </span>
        <p className=" text-xl text-gray-600 dark:text-gray-300">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
            <span className="relative"> Have a question? </span>
          </span>
          <br className="block sm:hidden" />
          Ask me on{" "}
          <a
            href="https://x.com/Daniel_CruzD"
            target="_blank"
            title="daniel-cruz"
            className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
          >
            Twitter
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
