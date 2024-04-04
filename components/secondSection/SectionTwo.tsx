import React from 'react'
import Carousel from './Carousel'

function SectionTwo() {
  return (
    <section className="max-width dark:carousel-bg bg-[#F8F8FF] mx-auto my-[2rem] py-[4rem] px-1">
      <h1 className="text-[3.15rem] dark:text-white font-bold text-center max-md:text-[2rem] max-sm:text-[1.4rem] whitespace-nowrap">
        Collection Spotlight
      </h1>
      <p className="text-center dark:text-white mt-3 text-[.81rem] font-semibold max-w-[920px] leading-[1.5rem] mx-auto">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>

    <div className='max-w-[890px]  mx-auto '>
     <Carousel />
    </div>
    </section>
  )
}

export default SectionTwo
