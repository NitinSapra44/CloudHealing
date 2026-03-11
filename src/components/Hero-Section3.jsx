import Image from "next/image";
import Card1 from "@/parts/Card1";
import Card2 from "@/parts/Card2";
import Card3 from "@/parts/Card3";

export default function HeroSection3() {
  return (
    <div id="services" className="w-full bg-[#E6EFF4] min-h-[80vh] flex justify-center items-start pb-48">
        <div className="bg-white w-[80%] border rounded-[50px]">
                            <div className="flex flex-col gap-5  justify-center items-center">
                                         <span className="text-7xl font-torus font-extrabold pt-20 ">Why Choose Us?</span>
                               <Image
                                        src="/Underline-Big.png"
                                        width={550}
                                        height={15}
                                        alt="underline"
                                />
                            </div>
                            <div className="flex flex-row mt-28 px-16 pb-16 justify-between gap-16">
                            <Card1 />
                        
                            <Card2 />
                            <Card3 />

                            </div>

        </div>
    </div>
  );
}
