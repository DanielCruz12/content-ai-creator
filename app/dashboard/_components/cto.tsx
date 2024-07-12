/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const Cto = () => {
  return (
    <div className="w-full rounded-lg pt-10">
      <div className="mx-auto w-full sm:px-6 lg:px-8 pb-20 rounded-lg">
        <div className="relative isolate overflow-hidden  px-6 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={412}
              cy={412}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#18181a" />
                <stop offset={1} stopColor="#828282" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-6 text-gray-800 dark:text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button className="">Get started</Button>
              <Button
                variant="outline"
                className="text-sm font-semibold leading-6"
              >
                Learn more <span aria-hidden="true"> →</span>
              </Button>
              {/*   <a
                href="#"
                className="text-sm font-semibold leading-6 text-black dark:text-white"
              >
                
              </a> */}
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="/diamond.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[20rem] md:w-[27rem] max-w-none rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cto;
