'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function EditBlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/api/posts");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-[#E6EFF4] flex justify-center min-h-screen pt-20 mx-auto">
      <div className="w-[80%] min-h-screen">
        <h1 className="text-3xl mb-6 font-bold text-gray-800">Edit Blogs</h1>

        {blogs.length === 0 ? (
          <p className="text-gray-600">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div 
                key={blog._id} 
                className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
              >
                {blog.titlePicUrl && (
                  <img 
                    src={blog.titlePicUrl} 
                    alt={blog.title} 
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title.length > 50 ? blog.title.slice(0, 50) + "..." : blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{blog.category}</p>

                <Link 
                  href={`/blog/edit-blog/${blog._id}`}
                  className="mt-auto inline-block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
