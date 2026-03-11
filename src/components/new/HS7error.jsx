"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection7Error() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "ADHD", "Anxiety", "Burnout", "CBT", "Child Therapy",
    "DBT", "Depression", "EMDR", "Family Therapy", "Greif",
    "Mental Health", "Nutrition", "Online Therapy", "Perinatal",
    "Relationships", "Teen Therapy", "Therapy", "Trauma"
  ];

  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh] lg:min-h-[40vh] flex justify-center items-start pb-24">
      <div className="bg-white max-w-screen-2xl w-[90%] border rounded-[50px] pt-10 pb-10">
        <div className="flex flex-col gap-5 justify-center items-center">

          {/* Heading */}
          <div className="flex justify-center flex-col px-6 sm:px-10">
            <span className="text-2xl sm:text-4xl font-torus font-medium text-center sm:text-left">
              Blogs to help you understand the issues better
            </span>
            <div className="flex mt-2 justify-center sm:justify-start">
              <Image src="/Underline-Big.png" width={100} height={15} alt="underline" />
            </div>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-3 px-6 sm:px-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-inter font-light text-sm sm:text-base px-2 py-1 border-2 rounded-full transition
                  ${selectedCategory === cat
                    ? "bg-[#00373E] text-white border-[#00373E]"
                    : "text-[#374151] border-[#B9B9B9] hover:bg-[#00373E] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Empty state */}
          <div className="w-full flex flex-col items-center justify-center py-20 px-10 gap-6">
            <div className="text-2xl sm:text-4xl font-torus text-center">Nothing to show right now</div>
            <Link href="/blog/all">
              <button className="font-roboto text-base underline">See More</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
