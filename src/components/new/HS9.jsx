import FAQ from "./faq";
import Image from "next/image";

export default function HeroSection9() {
  return (
    <div id="faq" className="w-full bg-[#E6EFF4] pb-24 min-h-[60vh] flex justify-center">
      <div className="w-[90%] max-w-screen-2xl flex flex-col lg:flex-row gap-8 lg:gap-4">
        <div className="w-full lg:w-[50%] flex flex-col justify-center gap-8 lg:gap-16">
          <div>
            <span className="font-torus text-[#00373E] font-bold text-3xl sm:text-5xl">
              Frequently Asked <br /> Questions
            </span>
          </div>
          <div>
            <span className="font-poppins text-[#00373E] text-lg sm:text-2xl leading-relaxed">
              Find answers to common questions <br className="hidden sm:block" />
              about our services, therapy, and mental <br className="hidden sm:block" />
              well-being.
            </span>
          </div>
          <Image src="/Frame.png" height={400} width={400} alt="Frame" className="hidden sm:block" />
        </div>
        <div className="w-full lg:w-[50%] flex items-end">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
