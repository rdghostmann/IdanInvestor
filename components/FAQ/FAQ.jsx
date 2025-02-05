import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FaQImg from "../../public/faqImg.png"
import Image from "next/image";
const FAQ = () => {
  return (
    <div className=" bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#57534e]
via-[#a8a29e]
to-[#e7e5e4] text-gray-600 px-4 md:p-8">
      <div className="max-w-6xl mx-auto my-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="hidden md:block">
          <Image
            src={FaQImg}
            alt="Decorative question marks"
            className="w-full h-auto"
            priority
            width={494}
            height={449}
          />

        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <div className="md:text-left space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-900">We Have Answers</h2>
            <p className="text-lg md:text-left text-gray-600 flex items-center gap-2 ">
              You will find answers to all your questions. For more information, you can always contact our technical
              support on the site.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-indigo-600/20">
              <AccordionTrigger className="text-indigo-900 hover:text-indigo-900/70">How can I start working with InvestJar?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Contact our support team to get started with your investment journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-indigo-600/20">
              <AccordionTrigger className="text-indigo-900 hover:text-indigo-900/70">
                What is the minimum percentage that an investor can earn?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The minimum percentage varies based on your investment plan and market conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-indigo-600/20">
              <AccordionTrigger className="text-indigo-900 hover:text-indigo-900/70">
                Can I reinvest profit from my InvestJar account balance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p>In order to make a reinvestment deposit from your InvestJar account balance, follow the instructions:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Login to your account</li>
                  <li>Click "Make deposit"</li>
                  <li>Select Source: "From balance"</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-indigo-600/20">
              <AccordionTrigger className="text-indigo-900 hover:text-indigo-900/70">
                What payment system can I use to withdraw?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We support multiple payment systems for withdrawals. Contact support for details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-indigo-600/20">
              <AccordionTrigger className="text-indigo-900 hover:text-indigo-900/70">Can I lose my money?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All investments carry some risk. Please read our risk disclosure document.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ
