import React from 'react';
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import earth from "../../public/header-astro2.png"
import Image from 'next/image';


const Hero1 = () => {
  return (
<<<<<<< HEAD
    <section className="py-10 px-7 bg-gradient-to-br from-[#010103] to-[#3b0930] w-full">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative text-center rounded-full px-2 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Announcing InvestJar.</span>
                <Link href="#" className="font-semibold ml-2 text-indigo-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </AnimatedShinyText>
            </div>
            <h1 className="my-6 text-pretty text-white text-4xl font-bold lg:text-6xl">
=======
    <section className="py-10 px-7">
      <div className="w-fit mx-auto relative text-center rounded-full px-2 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <AnimatedShinyText className="w-fit inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Announcing InvestJar.</span>
          <Link href="#" className="font-semibold ml-2 text-indigo-900">
            <span aria-hidden="true" className="absolute inset-0" />
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </AnimatedShinyText>
      </div>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-blue-700 text-4xl font-bold lg:text-6xl">
>>>>>>> 86dc44831cf7bd13ed98af656f5bfd343a23a2a6
              Invest at the perfect time
            </h1>
            <p className="mb-8 max-w-xl text-gray-300 lg:text-xl">
              By leveraging insights from our network of industry insiders, you'll know exactly when to buy to maximize profit and exactly when to sell to avoid losses
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link href="/register">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-500">Get Started</Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto">
                Learn More
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
<<<<<<< HEAD
          <div className='border-2  overflow-hidden  rounded-md w-full '>
=======
          {/* <div className='bg-slate-400 max-h-96 p-4 rounded-md '>
>>>>>>> 86dc44831cf7bd13ed98af656f5bfd343a23a2a6
            <Image
              src={earth}
              alt="hero-img"
              width={960}
              height={764}
              className="animate-pulse border-2 border-red-500  rounded-md object-cover"
            />
          </div> */}
          <img
            src="https://shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
