import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import React from "react";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

async function fetchBlog(id) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error("Failed to fetch blog");
  return data;
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export async function generateMetadata({ params }) {
  const blog = await fetchBlog(params.id);
  const plainTextContent = stripHtml(blog.content);
  const description = blog.description || plainTextContent.slice(0, 150);

  return {
    title: blog.title,
    description,
    openGraph: {
      title: blog.title,
      description,
      images: [blog.titlePicUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: [blog.titlePicUrl],
    },
  };
}

export default async function BlogPage({ params }) {
  const { id } = params;
  const blog = await fetchBlog(id);

  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl lg:max-w-[90%] xl:max-w-[80%] pt-20 flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row p-6 md:p-10 justify-between items-center gap-6 rounded-2xl shadow-md">
          <h1 className="font-bold text-4xl text-center md:text-left leading-tight font-torus">
            {blog.title}
          </h1>
          <div className="relative w-full flex justify-center items-center h-[400px]">
            <Image
              src={blog.titlePicUrl}
              alt={blog.title}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Blog Content */}
        <div
          className="pt-10 md:pt-20 px-4 pb-10 md:px-10 blog-content prose prose-lg max-w-none mx-auto prose-headings:font-poppins prose-headings:font-bold prose-img:rounded-lg prose-img:shadow-md prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
