"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionAllBlogs({ blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "ADHD", "Anxiety", "Burnout", "CBT", "Child Therapy",
    "DBT", "Depression", "EMDR", "Family Therapy", "Greif",
    "Mental Health", "Nutrition", "Online Therapy", "Perinatal",
    "Relationships", "Teen Therapy", "Therapy", "Trauma"
  ];

  const filteredPosts = selectedCategory !== "All"
    ? blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())
    : blogPosts;

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-[#E6EFF4] min-h-screen flex justify-center items-start py-20">
        <div className="bg-white w-[90%] border rounded-[50px] py-16 px-10 flex flex-col gap-12">
          {/* Heading */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-torus font-medium text-center">
              Explore All Blogs
            </h1>
            <p className="text-gray-600 text-2xl font-torus text-center">
              Browse our complete collection of therapy blogs by category
            </p>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center m-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-inter font-light text-base px-2 py-1 border-2 rounded-full transition
                  ${selectedCategory === cat
                    ? "bg-[#00373E] text-white border-[#00373E]"
                    : "text-[#374151] border-[#B9B9B9] hover:bg-[#00373E] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500 text-xl">No blogs found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map(post => (
                <Link key={post._id} href={`/blog/${post._id}`} className="block">
                  <div className="bg-white text-black rounded-[30px] overflow-hidden border hover:shadow-lg h-[450px] transition flex flex-col">
                    {/* Blog Image + Category */}
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={post.titlePicUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 right-4 bg-[#00373E] text-white px-3 py-1 rounded-full text-base">
                        {post.category}
                      </span>
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-xl  font-poppins leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Created At Date */}
                        <p className="text-gray-500 text-sm mt-2">
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      {/* Read More Button */}
                      <div className="mt-2">
                        <span className="inline-block  text-[#00373E] px-4 py-2 rounded-full border-2 border-[#00373E] text-sm font-medium hover:bg-[#02464f] transition">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
