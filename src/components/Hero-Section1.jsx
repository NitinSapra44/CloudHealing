import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection2 from "./Hero-Section2";
import HeroSection3 from "./Hero-Section3";
import HeroSection4 from "./Hero-Section4";
import HeroSection5 from "./Hero-Section5";
import HeroSection6 from "./Hero-Section6";
import HeroSection7 from "./Hero-Section7";
import HeroSection8 from "./Hero-Section8";
import HeroSection9 from "./Hero-Section9";
import HeroSection10 from "./Hero-Section10";
import HeroSection7Error from "./Hero-Section7Error";

export default function HeroSection({ blogPosts }) {
  return (
    <div>
      <Header />
      <div className="relative w-full">
        {/* Background Section */}
        <div className="relative w-full min-h-[70vh] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/Cloud-Sky.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Hero Rectangle */}
          <div
            className="
              relative z-[5] 
              w-[92%] sm:w-[88%] md:w-[80%] 
              mx-auto mt-20 sm:mt-28 lg:mt-40
              bg-gradient-to-b from-white to-white/70
              backdrop-blur-lg
              rounded-3xl border border-white/50
              flex flex-col lg:flex-row justify-between 
              p-6 sm:p-10 lg:p-16
              gap-10
            "
          >
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-torus font-semibold leading-tight">
                  When every act of kindness <br />
                  brings guid by councillor
                </h1>
                <div className="flex justify-start sm:justify-end pr-0 sm:pr-10">
                  <Image
                    src="/Underline.png"
                    width={180}
                    height={8}
                    alt="underline"
                    className="w-[150px] sm:w-[180px] h-auto"
                  />
                </div>
              </div>

              <span className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins leading-relaxed text-left">
                At Cloud Healing, we believe that every small act of kindness can create 
                ripples of change, bringing harmony to the world. Our compassionate 
                therapists are here to guide you on your journey toward healing.
              </span>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-emerald-600 text-white text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full font-medium">
                  only $9.99/m
                </button>
                <button className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base">
                  All therapists <span className="text-lg sm:text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl flex-1 min-h-[220px] sm:min-h-[300px] lg:min-h-[400px]">
              <Image
                src="/Hero-Section.png"
                alt="Hero-Image"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Other sections */}
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <HeroSection5 />
        <HeroSection6 />

        {/* Blog Section (Safe Render) */}
        {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
          <HeroSection7 blogPosts={blogPosts} />
        ) : (
          <HeroSection7Error/>
        )}

        <HeroSection8 />
        <HeroSection9 />
        <HeroSection10 />
      </div>
      <Footer />
    </div>
  );
}
