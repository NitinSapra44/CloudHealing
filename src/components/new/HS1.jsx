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

    
      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Cloud-Sky.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Centered Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 sm:px-10 pt-24 pb-16 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-torus leading-snug sm:leading-tight">
            When every act of kindness
            brings guid by councillor
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg font-poppins leading-relaxed max-w-2xl">
            Cloud Healing is built on kindness, care, and connection, creating a safe
            space that gently guides you toward healing and inner balance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button className="bg-emerald-600 text-white text-sm sm:text-base px-5 py-2 sm:py-3 rounded-full font-medium">
              only $9.99/m
            </button>
            <button className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base">
              All therapists <span className="text-lg sm:text-xl">→</span>
            </button>
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
