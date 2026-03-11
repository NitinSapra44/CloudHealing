'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const QuillEditor = dynamic(() => import('../../../../components/QuillEditor'), {
  ssr: false,
});

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pic, setPic] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        alert("Failed to load blog.");
        router.push("/blog/edit-blog");
        return;
      }

      setTitle(data.title || "");
      setContent(data.content || "");
      setCategory(data.category || "");
    };

    fetchBlog();
  }, [id, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updateData = { title, content, category };

      if (pic) {
        const fileExt = pic.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, pic);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);

        updateData.titlePicUrl = publicUrlData.publicUrl;
      }

      const { error: updateError } = await supabase
        .from("blogs")
        .update(updateData)
        .eq("id", id);

      if (updateError) throw updateError;

      alert("Blog updated!");
      router.push("/blog/edit-blog");
    } catch (err) {
      console.error(err);
      alert("Error updating blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center min-h-screen pt-20 mx-auto">
      <div className="w-[80%] min-h-screen">
        <h1 className="text-3xl mb-4 font-bold">Edit Blog Post</h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="border w-full p-2 mb-2"
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => setPic(e.target.files[0])}
          className="w-full border p-2 mb-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 mb-2"
        >
          <option value="">Select Category</option>
          <option value="ADHD">ADHD</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Burnout">Burnout</option>
          <option value="CBT">CBT</option>
          <option value="Child Therapy">Child Therapy</option>
          <option value="DBT">DBT</option>
          <option value="Depression">Depression</option>
          <option value="EMDR">EMDR</option>
          <option value="Family Therapy">Family Therapy</option>
          <option value="Greif">Greif</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Online Therapy">Online Therapy</option>
          <option value="Perinatal">Perinatal</option>
          <option value="Relationships">Relationships</option>
          <option value="Teen Therapy">Teen Therapy</option>
          <option value="Therapy">Therapy</option>
          <option value="Trauma">Trauma</option>
        </select>

        <QuillEditor
          value={content}
          onContentChange={setContent}
        />

        <button
          onClick={handleUpdate}
          disabled={loading}
          className="p-2 border border-lg mt-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </div>
    </div>
  );
}
