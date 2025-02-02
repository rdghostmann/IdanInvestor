import React from 'react'

const Stats = () => {
  return (
    <section>
    {/* Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold md:text-5xl">
        Our Stats
      </h2>
      {/* <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ut
        aliquam,purus sit amet luctus magna fringilla urna
      </p> */}
      {/* Content */}
      <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
        
        <div className="border border-gray-800 rounded-lg p-3 flex flex-col items-center justify-center gap-4">
          <div>
            {/* image  */}
          </div>
          <p className="text-sm">Total Desposited</p>
          <h2 className="text-3xl font-bold md:text-6xl">62K</h2>
        </div>
        <div className="border border-gray-800 rounded-lg p-3 flex flex-col items-center justify-center gap-4">
          <div>
            {/* image  */}
          </div>
          <p className="text-sm">Total Members</p>
          <h2 className="text-3xl font-bold md:text-6xl">70K+</h2>
        </div>
        <div className="border border-gray-800 rounded-lg p-3 flex flex-col items-center justify-center gap-4">
          <div>
            {/* image  */}
          </div>
          <p className="text-sm">Support Countries</p>
          <h2 className="text-3xl font-bold md:text-6xl">178</h2>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats
