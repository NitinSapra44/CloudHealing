import Resourcecard1 from "./RS1";
import Resourcecard2 from "./RS2";
import Resourcecard3 from "./RS3";

export default function HeroSection10() {
  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh] lg:min-h-[40vh] flex justify-center items-start pb-12">
      <div className="w-[90%] max-w-screen-2xl rounded-[100px]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-3xl sm:text-4xl font-torus font-bold pt-10 text-center">
            Resources for <br /> Your Wellbeing
          </span>
          <span className="text-lg font-light font-poppins pt-5 text-center">
            Explore expert insights, self-care guides, and tools to support your mental health.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row w-full mt-14 p-4 sm:p-8 justify-between gap-8">
          <Resourcecard1 />
          <Resourcecard2 />
          <Resourcecard3 />
        </div>
      </div>
    </div>
  );
}
