import { createClient } from "@supabase/supabase-js";
import HeroSectionAllBlogs from "@/components/HeroSectionAllBlogs";

export const metadata = {
  title: "Explore Therapy Blogs | Cloud Healing",
  description: "Browse our complete collection of therapy blogs on ADHD, Anxiety, Burnout, CBT, and more. Find tips, guides, and expert advice.",
  keywords: "therapy, mental health, ADHD, anxiety, burnout, CBT, depression, family therapy, blog",
};

export default async function AllBlogsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  try {
    const { data: blogPosts, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return <HeroSectionAllBlogs blogPosts={blogPosts || []} />;
  } catch (error) {
    console.error("Error loading blogs:", error);
    return (
      <div className="p-10 text-center bg-[#E6EFF4] min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-8">
          <h1 className="font-bold font-torus text-4xl text-red-600">Unable to Load Blogs</h1>
          <p className="text-gray-600 font-torus text-lg">
            Something went wrong while fetching the blogs. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
