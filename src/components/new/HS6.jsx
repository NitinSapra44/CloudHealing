"use client"
import { useState } from "react"
import Testimony from "./testimony"

export default function HeroSection6() {
  const [carouselApi, setCarouselApi] = useState(null)

  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh] lg:min-h-[40vh] flex justify-center pb-24">
      <div className="w-full max-w-screen-2xl flex flex-col lg:flex-row items-center">

        {/* Text + External Controls */}
        <div className="w-full lg:w-[40%] flex flex-col px-6 sm:px-10 lg:pl-20 gap-8 lg:gap-10 justify-center pt-10 lg:pt-0">
          <h2 className="font-torus text-3xl sm:text-4xl font-bold leading-tight">
            What Our Clients <br /> Are Saying
          </h2>
          <span className="font-poppins text-lg sm:text-xl leading-relaxed">
            Positive experiences from users who have benefited from therapy or wellness programs.
          </span>

          {/* External Carousel Controls */}
          <div className="flex gap-10 mt-4">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              className="flex items-center justify-center bg-white rounded-full w-12 h-12 shadow hover:scale-105 transition"
            >
              <img src="/Left-arrow.png" alt="Previous" className="w-4 h-3" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              className="flex items-center justify-center bg-[#00373E] rounded-full w-12 h-12 shadow hover:scale-105 transition"
            >
              <img src="/Right-arrow.png" alt="Next" className="w-4 h-3" />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full lg:w-[60%] h-[500px] overflow-hidden mt-6 lg:mt-0">
          <div className="relative lg:left-32">
            <Testimony setCarouselApi={setCarouselApi} />
          </div>
        </div>

      </div>
    </div>
  )
}
