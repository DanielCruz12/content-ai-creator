import React from "react";
import TimeLineCard from "@/components/time-line-card";

export const TimeLine = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mb-[10rem]">
      <h1 className="m-4 pb-5 text-2xl text-center font-semibold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
        History
      </h1>
      <div className=" flex justify-center items-center">
        <div className="px-8 md:px-0 max-w-4xl space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <TimeLineCard
            svgIcon={<></>}
            date="Q2, 2024"
            title="Volta Technologies"
            subTitle="is incorporated in El Salvador"
            description="Bilateral agreement with WSSLOT El Salvador to explore,
        develop, and execute transition-energy infrastructure for AI, Bitcoin
        Mining, Industrial and Residential projects. Discussions with private
        investors on the development of transition-energy Bitcoin Mining
        facilities using Ion Storm."
          />
          <TimeLineCard
            svgIcon={
              <svg
                className="fill-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
              </svg>
            }
            date="Q3, 2024"
            title="Deployment of"
            subTitle="$VOLTAI Coin"
            description="Local operations of transition-energy infrastructure in El
            Salvador with partner WSSLOT."
          />
          <TimeLineCard
            svgIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  className="fill-slate-300"
                  d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                />
                <path
                  className="fill-slate-500"
                  d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                />
              </svg>
            }
            date="Q4, 2024"
            title="$VOLTAI Coin"
            subTitle="to fund energy projects"
            description="Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose injected humour and the like."
          />
          <TimeLineCard
            svgIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current dark:text-green-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
            }
            date="Q5, 2025"
            title="Regional and Global scale of"
            subTitle="Volta Technologies"
            description="WSSLOT transition-energy facilities Customized transition-energy
            infrastructure solutions."
          />
        </div>
      </div>
    </div>
  );
};
