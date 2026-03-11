import Link from "next/link";

export default function Card1() {
  return (
    <div className="bg-[#D1E6E1] flex-1 rounded-[25px] pt-5 pl-3 pb-5  transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col gap-3 px-6">
        {/* Title */}
        <div className="flex justify-start">
          <h1 className="font-torus font-bold text-[#374151] text-base lg:text-2xl">
            Mindfulness Coaching
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-sm lg:text-base leading-relaxed text-[#4B5563] text-start mt-4">
            Work one-on-one with a certified coach to develop personalized mindfulness practices.
          </span>
        </div>

        {/* Read More Button */}
        <div className="flex justify-start">
          <Link href="/services/mindfulness-coaching">
            <button className="border bg-white py-1 px-3 lg:py-2 lg:px-6 rounded-full font-roboto mt-3   text-[#374151] text-sm lg:text-base">
              Read More
            </button>
          </Link>
        </div>

        {/* Bottom Badges */}
        <div className="
          pt-20
        ">
          {/* First Badge */}
          <div className="flex justify-end lg:justify-end xl:justify-center   ">
            <span
              className="
                border border-black 
                lg:py-1 lg:px-6 sm:px-2 px-2  rounded-full font-roboto text-[#374151]
                text-sm sm:text-base
               rotate-[20deg] lg:rotate-15 xl:rotate-[20deg]
              "
            >
              • Tailored Techniques
            </span>
          </div>

          {/* Second Badge */}
          <div className="flex justify-start mt-4  ">
            <span className="
              border border-black 
              lg:py-1 lg:px-6 sm:px-2 px-2 rounded-full font-roboto text-[#374151] text-sm sm:text-base
            ">
              • Personalised Plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
