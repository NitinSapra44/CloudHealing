import Resourcecard1 from "@/parts/ResourceCard1";
import Resourcecard2 from "@/parts/ResourceCard2";
import Resourcecard3 from "@/parts/ResourceCard3";


export default function HeroSection10() {
  return (
    <div className="w-full bg-[#E6EFF4] min-h-[80vh] flex justify-center items-start pt-48 pb-48">
        <div className=" w-[80%]  rounded-[100px]">
                            <div className="flex flex-col gap-5  justify-center items-center">
                                         <span className="text-7xl font-torus font-bold pt-20 ">Resources for <br/> Your Wellbeing</span>
                                         <span className="text-4xl font-light font-poppins  pt-10  ">Explore expert insights, self-care guides,<br/> and tools to support your mental health.</span>
                            </div>
                            <div className="flex flex-row w-full mt-28 p-16 justify-between gap-16">
                            <Resourcecard1/>
                            <Resourcecard2/>
                            <Resourcecard3/>

                            </div>

        </div>
    </div>
  );
}
