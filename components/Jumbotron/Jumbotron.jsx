import React from 'react';
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero47 = () => {
  return (
    <section className="bg-background py-20 lg:py-32 px-7">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <div className="text-5xl text-foreground md:text-6xl lg:text-8xl">
            <p>Hassle Free</p>
            <p className="text-muted-foreground">Financial Management</p>
          </div>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            Startup Capital Partners empowers entrepreneurs, executives, and
            accounting departments to propel their ventures to new heights. We
            deliver precise monetary analytics, visionary guidance, and seasoned
            counsel to fuel your company's growth.
          </p>
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-7">
            <Button className="group flex h-fit w-fit items-center rounded-full p-1.5">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight className="size-4 transition-all duration-300 group-hover:rotate-45" />
              </div>
              <span className="whitespace-nowrap pl-4 pr-6 text-sm lg:pl-6 lg:pr-8 lg:text-base">
                Contact Us
              </span>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href="#">Discover our offering</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute !left-1/2 top-2.5 !h-[92%] !w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src="https://shadcnblocks.com/images/block/placeholder-dark-7-tall.svg"
              alt=""
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
          <img
            className="relative z-10"
            src="https://shadcnblocks.com/images/block/mockups/phone-2.png"
            width={450}
            height={889}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero47;
