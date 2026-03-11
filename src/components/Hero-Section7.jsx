"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSection from "@/parts/BlogSection";

export default function HeroSection7({ blogPosts }) {
  const [carouselApi, setCarouselApi] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "ADHD", "Anxiety", "Burnout", "CBT", "Child Therapy", 
    "DBT", "Depression", "EMDR", "Family Therapy", "Greif", 
    "Mental Health", "Nutrition", "Online Therapy", "Perinatal",
    "Relationships", "Teen Therapy", "Therapy", "Trauma"
  ];

  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh] flex justify-center items-start pb-48">
      <div className="bg-white w-[80%] border rounded-[100px] pt-20 pb-10">
        <div className="flex flex-col gap-10 justify-center items-center ">
          
          {/* Heading */}
          <div className="flex justify-center flex-col ">
            <span className="text-7xl font-torus font-medium">
              Blogs to help you understand the issues better
            </span>
            <div className="flex mt-2
             justify-start">
              <Image
                src="/Underline-Big.png"
                width={200}
                height={15}
                alt="underline"
              />
            </div>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-4 px-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-inter font-light lg:text-3xl md:text-xl px-3 py-2 border-2 rounded-full transition
                  ${selectedCategory === cat 
                    ? "bg-[#00373E] text-white border-[#00373E]"
                    : "text-[#374151] border-[#B9B9B9] hover:bg-[#00373E] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog carousel */}
          <div className="flex flex-row w-full overflow-hidden p-10">
            {/* Controls on left */}
            <div className="w-[20%] flex justify-center items-center flex-row gap-20">
              <div>
                <Link href="/blog/all"><button className="font-roboto lg:text-3xl md:text-xl underline">
                  See More
                </button></Link>
                
              </div>
              <div className="flex flex-col gap-5">
                <button 
                  onClick={() => carouselApi?.scrollPrev()} 
                  className="flex items-center justify-center bg-white rounded-full w-20 h-20 shadow hover:scale-105 transition"
                >
                  <img src="/Left-arrow.png" alt="Previous" className="w-7 h-5" />
                </button>
                <button 
                  onClick={() => carouselApi?.scrollNext()} 
                  className="flex items-center justify-center bg-white rounded-full w-20 h-20 shadow hover:scale-105 transition"
                >
                  <img src="/Left-arrow.png" alt="Next" className="w-7 h-5 rotate-180" />
                </button>
              </div>
            </div>

            {/* Blog section on right */}
            <div className="w-[80%] relative left-36">
              <BlogSection 
                setCarouselApi={setCarouselApi} 
                selectedCategory={selectedCategory}
                blogPosts={blogPosts}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
