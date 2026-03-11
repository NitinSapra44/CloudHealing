

import Image from "next/image"
import Link from "next/link"

export default function HeroSection8() {
  return (
    <div className="pb-48 pt-48 bg-[#E6EFF4] min-h-[80vh] flex justify-center">
      <div className="relative w-[80%] flex flex-row justify-center">
        
        {/* Image box */}
        <div className="relative   w-[45%] aspect-[1/1]  z-10">
          <Image 
            src="/Consult.png" 
            alt="Consult"
            fill
            className="object-cover rounded-[80px]"
          />
        </div>

        {/* White box overlapping */}
        <div className="w-[55%]  relative z-20 flex items-center justify-center -translate-x-20">
          <div className="bg-white rounded-[80px] px-20 py-40 flex flex-col gap-10">
            
            <div>
              <span className="text-7xl font-bold font-torus text-[#00373E]">
                15 minutes free consultation
              </span>
            </div>

            <div>
              <span className="text-3xl font-torus">
                Lorem ipsum dolor sit amet consectetur. Felis egestas nisl nulla massa 
                nulla egestas in massa. Dictum magna id tortor eget nisi ac. Proin 
                dignissim ullamcorper amet ullamcorper ac aliquam. Cras sed sit 
                risus id pellentesque in.
              </span>
            </div>

            <div>
              <Link href="/contact-us"><button className="text-3xl p-6 bg-[#00373E] font-poppins font-extralight text-white rounded-lg">
                Start your consultation
              </button></Link>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}
