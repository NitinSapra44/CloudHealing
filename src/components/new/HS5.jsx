import Image from "next/image";
import Ratecard1 from "./ratecard1";
import Ratecard2 from "./ratecard2";

export default function HeroSection5() {
  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center items-start pt-24 pb-24">
      <div className="bg-white max-w-screen-2xl w-[90%] border rounded-[50px] flex flex-col items-center">

        {/* Title Section */}
        <div className="flex flex-col gap-3 justify-center items-center pt-8 px-4 text-center">
          <span className="text-3xl sm:text-4xl font-torus font-medium">
            Therapist Tiers
          </span>
          <Image
            src="/Underline-Big.png"
            width={300}
            height={10}
            alt="underline"
            className="h-auto"
          />
          <span className="text-base sm:text-xl font-roboto font-light text-center">
            Choose a therapist who understands your unique story, decide on a rate
            that fits your lifestyle, and begin a journey towards personal growth.
          </span>
        </div>

        {/* Rate Cards */}
        <div className="flex flex-col lg:flex-row flex-wrap mt-10 gap-5 w-full justify-center px-6 sm:px-8 pb-8">
          <Ratecard1 />
          <Ratecard2 />
        </div>
      </div>
    </div>
  );
}
