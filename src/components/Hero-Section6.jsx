"use client"
import { useState } from "react"
import Testimony from "@/parts/Testimony"

export default function HeroSection6() {
  const [carouselApi, setCarouselApi] = useState(null)

  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh]">
      <div className="relative left-32 w-full flex flex-row">
        
        {/* Text + External Controls */}
        <div className="w-[40%] flex flex-col gap-10 justify-center">
          <h2 className="font-torus text-8xl leading-tight">
            What Our Clients <br /> Are Saying
          </h2>
           <span className="font-poppins text-4xl leading-relaxed">
            Positive experiences from users who <br/> have benefited from therapy or wellness <br/> programs.
          </span>


          {/* External Carousel Controls */}
          <div className="flex gap-10 mt-4">
            <button 
              onClick={() => carouselApi?.scrollPrev()} 
              className="flex items-center justify-center bg-white rounded-full w-20 h-20 shadow hover:scale-105 transition"
            >
              <img src="/Left-arrow.png" alt="Previous" className="w-7 h-5" />
            </button>
            <button 
              onClick={() => carouselApi?.scrollNext()} 
              className="flex items-center justify-center bg-[#00373E] rounded-full w-20 h-20 shadow hover:scale-105 transition"
            >
              <img src="/Right-arrow.png" alt="Next" className="w-7 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-[60%] overflow-clip">
          <Testimony setCarouselApi={setCarouselApi} />
        </div>
      </div>
    </div>
  )
}
