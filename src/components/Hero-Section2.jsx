export default function HeroSection2() {
  return (
    <div className="w-full  bg-[#E6EFF4] flex justify-center pt-48 pb-48 ">
      <div className="w-[80%] flex   flex-col gap-36">
        
        {/* Title */}
        <div className="flex items-center justify-center mb-12">

          <h1 className="text-7xl font-torus font-extrabold">How it works?</h1>
        </div>

        {/* Buttons + Images */}
        <div className="w-full flex flex-row items-center justify-between mx-auto -mb-10 ">
          {/* Button 1 */}
          <div className="w-1/5 flex justify-end">      
            <div className="w-20 h-20 bg-[#378C7E] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                1
            </div>
          </div>

          <div className="w-1/5 flex justify-end ">
             <img src="/Arrow.png" alt="connector" className="h-4 " />
          </div>

          <div className="w-1/5 flex justify-center items-center">
            <div className="w-20 h-20 border-4 border-[#378C7E]  text-[#378C7E] rounded-full flex items-center justify-center text-3xl font-bold">
                2
            </div>
          </div>

          <div className="w-1/5 ">
             <img src="/Arrow.png" alt="connector" className="h-4" />
          </div>
          <div className="w-1/5 flex ">
            <div className="w-20 h-20 border-4 border-[#378C7E]  text-[#378C7E] rounded-full flex items-center justify-center text-3xl font-bold">
                3
            </div>
          </div>
        
        </div>
        <div className="w-full flex flex-row justify-between" >
            <div className="w-1/3 text-center flex flex-col gap-10">
                <span className="font-poppins text-5xl  ">
                    Find the best therapist <br/> for you
                </span>
                <span className="font-poppins font-light text-black/70 text-3xl  ">
                    Answer a few questions to find a <br/> match based on your needs <br/> and preferences.
                </span>
            </div>
           <div className="w-1/3 text-center  flex flex-col gap-10">
                <span className="font-poppins text-5xl  ">
                    Connect with our <br/> therapist
                </span>
                  <span className="font-poppins font-light text-black/70 text-3xl ">
                    You'll receive a message from <br/> your therapist with next steps.
                </span>
                
            </div>
          <div className="w-1/3 text-center  flex flex-col gap-10">
                <span className="font-poppins text-5xl  ">
                   Start counseling <br/> today
                </span>
                  <span className="font-poppins font-light text-black/70 text-3xl  ">
                    Meet with your therapist <br/> regularly.
                </span>
                
            </div>
        </div>
      </div>
    </div>
  );
}
