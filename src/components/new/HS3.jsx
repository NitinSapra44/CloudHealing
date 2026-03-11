import Image from "next/image";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

export default function HeroSection3() {
  return (
    <div id="services" className="w-full bg-[#E6EFF4] min-h-[60vh] lg:min-h-[30vh] flex justify-center items-start pb-24">
      <div className="bg-white w-[90%] max-w-screen-2xl border rounded-[50px] p-6 sm:p-10">
        <div className="flex flex-col gap-5 justify-center items-center">
          <span className="text-3xl sm:text-4xl font-torus font-extrabold pt-5 text-center">Why Choose Us?</span>
          <Image
            src="/Underline-Big.png"
            width={250}
            height={15}
            alt="underline"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-14 px-2 sm:px-5 pb-5 justify-between gap-5">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
}
