import Image from "next/image"
import Link from "next/link"

export default function HeroSection8() {
  return (
    <div className="pb-24 bg-[#E6EFF4] min-h-[80vh] lg:min-h-[40vh] flex justify-center">
      <div className="w-[90%] max-w-screen-2xl flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">

        {/* Image box */}
        <div className="relative w-full lg:w-[45%] aspect-[4/3] lg:aspect-[1/1] z-10 rounded-[40px] overflow-hidden">
          <Image
            src="/Consult.png"
            alt="Consult"
            fill
            className="object-cover rounded-[40px]"
          />
        </div>

        {/* White box */}
        <div className="w-full lg:w-[55%] lg:relative lg:z-20 lg:-translate-x-20">
          <div className="bg-white rounded-[40px] px-6 sm:px-10 py-10 sm:py-20 flex flex-col gap-5">
            <div>
              <span className="text-2xl sm:text-4xl font-bold font-torus text-[#00373E]">
                15 minutes free consultation
              </span>
            </div>
            <div>
              <span className="text-base font-torus">
                Lorem ipsum dolor sit amet consectetur. Felis egestas nisl nulla massa
                nulla egestas in massa. Dictum magna id tortor eget nisi ac. Proin
                dignissim ullamcorper amet ullamcorper ac aliquam. Cras sed sit
                risus id pellentesque in.
              </span>
            </div>
            <div>
              <Link href="/contact-us">
                <button className="text-base p-3 bg-[#00373E] font-poppins font-extralight text-white rounded-lg">
                  Start your consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
