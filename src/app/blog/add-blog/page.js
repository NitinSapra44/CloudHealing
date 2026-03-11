'use client';

import dynamic from 'next/dynamic';
import React, { useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

const QuillEditor = dynamic(() => import('../../../components/QuillEditor'), {
  ssr: false,
});

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pic, setPic] = useState(null);
  const [category, setCategory] = useState("ADHD");
  const [resetEditor, setResetEditor] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !pic || !category) {
      alert("All fields required.");
      return;
    }

    setLoading(true);
    try {
      // Upload image to Supabase Storage
      const fileExt = pic.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, pic);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      const titlePicUrl = publicUrlData.publicUrl;

      // Insert blog into database
      const { error: insertError } = await supabase.from("blogs").insert([
        { title, content, category, titlePicUrl },
      ]);

      if (insertError) throw insertError;

      alert("Blog submitted!");
      setTitle("");
      setContent("");
      setPic(null);
      setCategory("ADHD");
      if (fileInputRef.current) fileInputRef.current.value = null;
      setResetEditor(true);
      setTimeout(() => setResetEditor(false), 0);
    } catch (err) {
      console.error(err);
      alert("Error submitting blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center pt-20 pb-20 mx-auto">
      <div className="w-[80%]">
        <h1 className="text-3xl mb-4 font-bold">Create Blog Post</h1>

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
          resetSignal={resetEditor}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="p-2 border border-lg mt-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
