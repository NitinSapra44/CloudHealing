import Link from "next/link";

export default function Card1() {
  return (
    <div className="bg-[#D1E6E1] flex-1 rounded-[50px] pt-12 pb-12 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col gap-7 px-12">
        {/* Title */}
        <div className="flex justify-start">
          <h1 className="font-torus font-bold text-[#374151] text-5xl">
            Mindfulness Coaching
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-3xl leading-relaxed text-[#4B5563] text-start mt-4">
            Work one-on-one with a certified coach to develop personalized mindfulness practices.
          </span>
        </div>

        {/* Read More Button */}
        <div className="flex justify-start">
          <Link href="/services/mindfulness-coaching">
            <button className="border bg-white py-2 px-6 rounded-full font-roboto text-[#374151] text-3xl">
              Read More
            </button>
          </Link>
        </div>

        {/* Bottom Badges */}
        <div className="pt-36">
          <div className="flex justify-end">
            <span className="border border-black rotate-[30deg] py-2 px-12 rounded-full font-roboto text-[#374151] text-3xl">
              • Tailored Techniques
            </span>
          </div>
          <div className="flex justify-start mt-4">
            <span className="border border-black py-2 px-12 rounded-full font-roboto text-[#374151] text-3xl">
              • Personalised Plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
