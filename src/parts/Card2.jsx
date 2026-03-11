import Link from "next/link";

export default function Card2() {
  return (
    <div className="flex flex-col flex-1 gap-16 justify-between">
      {/* Intro Text */}
      <div className="rounded-xl pb-12">
        <p className="font-roboto font-light text-center text-5xl leading-relaxed">
          Embrace the present moment. Experience mindful living with expert coaching support.
        </p>
      </div>

      {/* Card */}
      <div className="bg-[#C5E4F6] rounded-[50px] pt-12 pb-12 transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="flex flex-col gap-7 px-12">
          {/* Title */}
          <div className="flex justify-start">
            <h1 className="font-torus text-[#374151] font-bold text-5xl">
              Group Therapy
            </h1>
          </div>

          {/* Description */}
          <div className="flex justify-start">
            <span className="font-poppins text-3xl leading-relaxed text-[#4B5563] text-start mt-4">
              Connect with others in a supportive environment and learn mindfulness techniques together.
            </span>
          </div>

          {/* Read More Button */}
          <div className="flex justify-start">
            <Link href="/services/group-therapy">
              <button className="border bg-white py-2 px-6 rounded-full font-roboto text-[#374151] text-3xl">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
