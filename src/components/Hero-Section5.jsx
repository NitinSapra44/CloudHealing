import Image from "next/image";
import Ratecard1 from "@/parts/Rate-Card1";
import Ratecard2 from "@/parts/Rate-Card2";

export default function HeroSection5() {
  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center items-start py-24 sm:py-32 lg:py-48">
      <div className="bg-white w-[90%] sm:w-[85%] lg:w-[80%] border rounded-[50px] flex flex-col items-center">
        
        {/* Title Section */}
        <div className="flex flex-col gap-5 justify-center items-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-16">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-torus font-medium text-center">
            Therapist Tiers
          </span>
          <Image
            src="/Underline-Big.png"
            width={350}
            height={10}
            alt="underline"
            className="w-[250px] sm:w-[350px] h-auto"
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-roboto font-light text-center leading-relaxed">
            Choose a therapist who understands your unique story, decide on a rate that fits your lifestyle, and begin a journey towards personal growth.
          </span>
        </div>

        {/* Rate Cards */}
        <div className="flex flex-col lg:flex-row flex-wrap mt-10 gap-10 sm:gap-16 w-full justify-center px-4 sm:p-8  lg:px-16">
          <Ratecard1 />
          <Ratecard2 />
        </div>
      </div>
    </div>
  );
}
