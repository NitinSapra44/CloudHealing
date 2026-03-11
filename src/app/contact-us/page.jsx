"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "emailjs-com";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const form = useRef();

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && form.current) {
      form.current.therapistType.value = type;
    }
  }, [searchParams]);

  const sendEmail = (e) => {
    e.preventDefault();

    Promise.all([
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
    ])
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error("Email error:", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#E6EFF4] py-16 px-4">
      <section className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 mb-5 leading-relaxed">
          Fill out the form below to reach out. We'll respond as soon as
          possible.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name:
            </label>
            <input
              id="name"
              name="user_name"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email:
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="therapist"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Select Therapist Type:
            </label>
            <select
              id="therapist"
              name="therapistType"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select--</option>
              <option value="intern">Intern Therapist</option>
              <option value="associate">Associate Therapist</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="user_message"
              rows="5"
              required
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#E6EFF4]">Loading...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
