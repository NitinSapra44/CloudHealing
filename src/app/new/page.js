import { createClient } from "@supabase/supabase-js";
import HS1 from "@/components/new/HS1";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let blogPosts = [];

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) blogPosts = data || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  return <HS1 blogPosts={blogPosts} />;
}
