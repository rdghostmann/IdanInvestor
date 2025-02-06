import React from 'react'
import Link from "next/link"
import Profit from "../../public/profit.jpg"
import Image from "next/image"
import waterbluebg from "../../public/image_fx_.jpg"
const HowItWorks = () => {

  return (
    <section className="w-full relative px-4 py-16 md:px-6 lg:px-8">
     <Image
     src={waterbluebg}
     alt='waterbluemark'
     style={{
      width: '100%',
      height: "100%"
     }}
     className='absolute -z-10 top-0 left-0 bg-cover bg-no-repeat opacity-50'
     priority
     quality={100}
     
     />
     
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-base text-blue-600">Get to Know</h3>
          <h2 className="mb-6 text-3xl font-bold text-indigo-900 md:text-4xl">How We Work</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Follow these simple steps and make profit
          </p>
        </div>

  
        <section className="text-gray-700">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-sm font-bold text-blue-600 mb-1 tracking-wider">STEP 1</h2>
                    <h2 className="title-font text-sm font-bold text-indigo-900 mb-1 tracking-wider">Create Account</h2>
                    <p className="leading-relaxed">Click <Link href="/register">Sign Up</Link> to fill the blank, our SSL will protect your privacy.</p>
                  </div>
                </div>

                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-sm font-bold text-blue-600 mb-1 tracking-wider">STEP 2</h2>
                    <h2 className="title-font text-sm font-bold text-indigo-900 mb-1 tracking-wider">Make an Investment</h2>
                    <p className="leading-relaxed"><Link href="/login">Login</Link> to your account to click invest to start earning profit.</p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font text-sm font-bold text-blue-600 mb-1 tracking-wider">STEP 3</h2>
                    <h2 className="title-font text-sm font-bold text-indigo-900 mb-1 tracking-wider">Get Profit</h2>
                    <p className="leading-relaxed">You will get your profit on your profile, and you will also receive instant payment.</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  className="object-cover object-center rounded-lg"
                  src={Profit}
                  alt="step"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HowItWorks
