import Image from "next/image";
import dynamic from "next/dynamic";
import HS2 from "./HS2";
import HeroSection3 from "./HS3";
import HeroSection4 from "./HS4";
import HeroSection5 from "./HS5";
import HeroSection6 from "./HS6";
import HeroSection7 from "./HS7";
import HeroSection7Error from "./HS7error";
import HeroSection8 from "./HS8";
import HeroSection9 from "./HS9";
import HeroSection10 from "./HS10";
import Header1 from "./Header";
import Footer from "./Footer";
export default function HS1({ blogPosts }) {
  return (
    <div>
      <Header1/>
    <div className="relative w-full">

    
      <div className="relative w-full min-h-[70vh] lg:min-h-[40vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Cloud-Sky.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
  

        {/* Overlay Content */}
        <div
          className="
            relative z-10 
          
            w-[90%] max-w-screen-2xl 
            mx-auto mt-20 sm:mt-28
            bg-gradient-to-b from-white to-white/70
            backdrop-blur-lg
            rounded-3xl border border-white/50
            flex flex-col lg:flex-row justify-between 
            p-6 sm:p-8 lg:p-10
            gap-8 lg:gap-10
          "
        >
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl 
                            font-torus leading-snug sm:leading-tight">
                When every act of kindness <br />
                brings guid by councillor
              </h1>

              <div className="flex justify-start sm:justify-end mt-2">
                <Image
                  src="/Underline.png"
                  width={180}
                  height={8}
                  alt="underline"
                  className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
                />
              </div>
            </div>

            <span className="text-gray-700 text-[13px] sm:text-sm md:text-base font-poppins text-left leading-relaxed">
              At Cloud Healing, we believe that every small act of kindness can create
              ripples of change, bringing harmony to the world. Our compassionate
              therapists are here to guide you on your journey toward healing.
            </span>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
              <button className="bg-emerald-600 text-white text-sm sm:text-base p-2 sm:p-3 rounded-full font-medium">
                only $9.99/m
              </button>
              <button className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base">
                All therapists <span className="text-lg sm:text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl flex-1 min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] mt-6 lg:mt-0">
            <Image
              src="/Hero-Section.png"
              alt="Hero-Image"
              fill
              className="object-cover object-center rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Following Sections */}
      <HS2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5/>
      <HeroSection6/>
            {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
                <HeroSection7 blogPosts={blogPosts} />
              ) : (
                <HeroSection7Error/>
              )}
      <HeroSection8/>
      <HeroSection9/>
      <HeroSection10/>

    </div>
    <Footer/>
    </div>
  );
}
