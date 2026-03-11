'use client';

import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";
import "../quill-fonts.css";
import ImageResize from "quill-image-resize-module-react";

// -------------------------
// Register custom fonts
// -------------------------
const Font = Quill.import("formats/font");
Font.whitelist = ["poppins"];
Quill.register(Font, true);

// -------------------------
// Register custom sizes
// -------------------------
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["12px", "14px", "16px", "18px", "24px", "32px", "48px", "64px"];
Quill.register(Size, true);

// -------------------------
// Register modules
// -------------------------
Quill.register("modules/imageResize", ImageResize);
const AlignStyle = Quill.import("attributors/style/align");
Quill.register(AlignStyle, true);

export default function QuillEditor({ value, onContentChange, resetSignal }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // Initialize Quill once
  useEffect(() => {
    if (quillRef.current) return; // Avoid re-initializing

    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Write your blog...",
      modules: {
        toolbar: {
          container: [
            [{ font: Font.whitelist }],
            [{ size: Size.whitelist }],
            [{ header: [1, 2, 3, false] }],
            [{ align: [] }],
            ["bold", "italic", "underline"],
            ["link", "image", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
          handlers: {
            image: () => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");
              input.click();

              input.onchange = async () => {
                const file = input.files[0];
                if (!file) return;

                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "Hello_12"); // Replace with your Cloudinary preset

                try {
                  const res = await axios.post(
                    "https://api.cloudinary.com/v1_1/djwqli3w2/image/upload",
                    formData
                  );

                  const imageUrl = res.data.secure_url;
                  const range = quillRef.current.getSelection(true);

                  quillRef.current.insertEmbed(range.index, "image", imageUrl);
                  quillRef.current.setSelection(range.index + 1);

                  // Add floating logic dynamically after image is inserted
                  setTimeout(() => {
                    const imgs = editorRef.current.querySelectorAll("img");
                    imgs.forEach((img) => {
                      if (img.dataset.observed) return;

                      const updateFloatClass = () => {
                        if (img.clientWidth < 1000) {
                          img.classList.add("float-left");
                        } else {
                          img.classList.remove("float-left");
                        }
                      };

                      updateFloatClass();
                      const resizeObserver = new ResizeObserver(updateFloatClass);
                      resizeObserver.observe(img);
                      img.dataset.observed = "true";
                    });
                  }, 100);
                } catch (err) {
                  console.error("Image upload failed:", err);
                }
              };
            },
          },
        },
        imageResize: {
          modules: ["Resize", "DisplaySize", "Toolbar"],
        },
      },
    });

    // Update React state on every change
    quillRef.current.on("text-change", () => {
      onContentChange(quillRef.current.root.innerHTML);
    });
  }, [onContentChange]);

  // Keep Quill in sync when value prop changes
  useEffect(() => {
    if (!quillRef.current) return;
    const editor = quillRef.current;
    const currentHTML = editor.root.innerHTML;

    if (value !== undefined && value !== currentHTML) {
      const selection = editor.getSelection();
      editor.root.innerHTML = value || "";
      if (selection) editor.setSelection(selection);
    }
  }, [value]);

  // Handle reset
  useEffect(() => {
    if (quillRef.current && resetSignal) {
      quillRef.current.setContents([{ insert: "\n" }]);
    }
  }, [resetSignal]);

  return (
    <div
      ref={editorRef}
      style={{ height: "600px" }}
      className="bg-white border-black border-4"
    />
  );
}
