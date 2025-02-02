"use client";
import React from 'react';

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://shadcnblocks.com/images/block/logos/astro.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://shadcnblocks.com/images/block/logos/figma.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://shadcnblocks.com/images/block/logos/react.png",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
  },
];

const LogoClouds = () => {
  return (
    <section className="py-5 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          Trusted by these companies
        </h1>
      </div>

      <div className="container mx-auto pt-5 md:pt-11 lg:pt-15">
        <div className="relative w-full flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
            className="w-full max-w-full"
          >
            <CarouselContent className="flex items-center justify-center">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 pl-0 xs:basis-1/4 sm:basis-1/5 md:basis-1/6"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-6 w-auto sm:h-7"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Left and Right Fade Effects */}
          <div className="absolute inset-y-0 left-0 w-10 sm:w-12 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-10 sm:w-12 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoClouds;
