// HeroSection4.jsx
import CardAngad from "@/parts/Introcard-Angad";
import CardAnkit from "@/parts/Introcard-Ankit";

export default function HeroSection4() {
  return (
    <div
      id="our-therapists" // <-- add this for scrolling
      className="w-full min-h-[90vh] bg-[url(/Office-Bg.png)] bg-cover bg-center flex justify-center items-center pt-48 pb-48"
    >
      <div className="w-[80%] flex flex-col justify-center bg-white/50 backdrop-blur-md rounded-3xl shadow-lg px-10 py-20 gap-28">
        <div className="flex justify-center">
          <span className="bg-white px-10 py-2 text-3xl rounded-full">Our Team</span>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex-1 flex flex-row gap-20">
            <CardAnkit />
            <CardAngad />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-white font-semibold font-poppins text-2xl">
                  Meet Our Therapists
                </span>
              </div>
              <div className="w-full text-left">
                <span className="text-white font-light font-poppins text-3xl">
                  Meet our dedicated team of over 140 experienced social workers<br />
                  and psychotherapists. Together, we're committed to understanding <br />
                  and supporting you through life's challenges.
                </span>
              </div>
              <div className="pt-5">
                <span className="text-white font-poppins text-3xl">
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
