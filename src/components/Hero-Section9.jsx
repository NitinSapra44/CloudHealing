import FAQ from "@/parts/FAQ";
import Image from "next/image";


export default function HeroSection9() {
  return (
    <div id="faq" className=" w-full bg-[#E6EFF4] min-h-[80vh] flex justify-center ">
        <div className=" w-[80%]  flex flex-row gap-4 rounded-[100px]">
          <div className="w-[50%] flex flex-col justify-center  gap-16">
            <div><span className="font-torus text-[#00373E] font-bold text-7xl">Frequently Asked <br/> Questions</span></div>
            <div><span className="font-poppins text-[#00373E] text-5xl leading-relaxed">Find answers to common questions <br/> about our services, therapy, and mental <br/> well-being.</span></div>
            <Image src="/Frame.png" height={1000} width={1000} alt="Frame"></Image>
          </div>
          <div className="w-[50%] flex items-end  ">
              <FAQ/>
          </div>
              

        </div>
    </div>
   
  );
}
