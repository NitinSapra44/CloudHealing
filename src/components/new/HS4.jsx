// HeroSection4.jsx
import CardAngad from "./angadcard";
import CardAnkit from "./ankitcard";

export default function HeroSection4() {
  return (
    <div
      id="our-therapists"
      className="w-full min-h-[50vh] bg-[url(/Office-Bg.png)] bg-cover bg-center flex justify-center items-center pt-24 pb-24"
    >
      <div className="w-[90%] max-w-screen-2xl flex flex-col justify-center bg-white/50 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-10 gap-10 lg:gap-14">
        <div className="flex justify-center">
          <span className="bg-white px-10 py-2 text-base rounded-full">Our Team</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex flex-row gap-4 sm:gap-10 justify-center lg:flex-1">
            <CardAnkit />
            <CardAngad />
          </div>
          <div className="lg:flex-1">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-white font-semibold font-poppins text-lg">
                  Meet Our Therapists
                </span>
              </div>
              <div className="w-full text-left">
                <span className="text-white font-light font-poppins text-base">
                  Meet our dedicated team of over 140 experienced social workers
                  and psychotherapists. Together, we&apos;re committed to understanding
                  and supporting you through life&apos;s challenges.
                </span>
              </div>
              <div className="pt-5">
                <span className="text-white font-poppins text-base">
                  Explore and find your therapist who is here to walk beside you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
