export default function HS2(){
    return(
         <div className="w-full  bg-[#E6EFF4] flex justify-center pt-24 pb-24 ">
             <div className="w-[90%] flex  max-w-screen-2xl  flex-col gap-12">

        
        {/* Title */}
        <div className="flex items-center justify-center mb-12">

          <h1 className="text-xl lg:text-4xl  font-torus font-extrabold">How it works?</h1>
        </div>

        {/* Buttons + Images */}
        <div className="w-full flex flex-row items-center justify-between mx-auto  ">
          {/* Button 1 */}
          <div className="w-1/5 flex justify-end pr-7">      
            <div className="lg:w-12 lg:h-12 w-8 h-8  bg-[#378C7E] text-white rounded-full flex items-center justify-center text-base ">
                1
            </div>
          </div>

          <div className="w-1/5 flex justify-end ">
             <img src="/Arrow.png" alt="connector" className="h-1 lg:h-2 " />
          </div>

          <div className="w-1/5 flex justify-center items-center">
            <div className="lg:w-12 lg:h-12 w-8 h-8  
                            border-2 border-[#378C7E] rounded-full 
                            text-[#378C7E] text-base 
                            flex items-center justify-center">
                2
            </div>
          </div>

          <div className="w-1/5 ">
             <img src="/Arrow.png" alt="connector" className="h-1 lg:h-2 " />
          </div>
          <div className="w-1/5 flex pl-4 ">
            <div className="lg:w-12 lg:h-12 w-8 h-8  border-2 border-[#378C7E]  text-[#378C7E] rounded-full flex items-center justify-center text-base ">
                3
            </div>
          </div>
        
        </div>
        <div className="w-full flex flex-row justify-between" >
            <div className="w-1/3 text-center flex flex-col gap-5">
                <span className="font-poppins text-base lg:text-2xl  ">
                    Find the best therapist <br/> for you
                </span>
                <span className="font-poppins font-light text-black/70 text-sm lg:text-base  ">
                    Answer a few questions to find a <br/> match based on your needs <br/> and preferences.
                </span>
            </div>
           <div className="w-1/3 text-center  flex flex-col gap-5">
                <span className="font-poppins text-base lg:text-2xl  ">
                    Connect with our <br/> therapist
                </span>
                  <span className="font-poppins font-light text-black/70 text-sm lg:text-base ">
                    You'll receive a message from <br/> your therapist with next steps.
                </span>
                
            </div>
          <div className="w-1/3 text-center  flex flex-col gap-5">
                <span className="font-poppins text-base lg:text-2xl ">
                   Start counseling <br/> today
                </span>
                  <span className="font-poppins font-light text-black/70 text-sm lg:text-base  ">
                    Meet with your therapist <br/> regularly.
                </span>
                
            </div>
        </div>
      </div>
            </div>
    )
}