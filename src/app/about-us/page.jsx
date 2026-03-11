import Image from "next/image";

export default function Aboutus() {
  return (
    <div className="bg-[#E6EFF4] min-h-screen flex justify-center py-16">
      <div className="w-[90%] md:w-[80%] border-2 p-8 rounded-[50px] bg-white">
        <div className="flex flex-col gap-12">
          {/* Heading */}
          <h1 className="text-4xl font-torus font-extrabold p-8 text-center">
            About Us
          </h1>

          {/* Image + Text */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image container */}
            <div className="w-full md:w-[40%] relative aspect-[4/5] md:aspect-auto h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Blog3.jpg"
                alt="about-us"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Text content */}
            <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 sm:gap-6 text-base  font-poppins font-light">
              <p>
                I come from a multicultural household. If you've lived this experience, you can relate to how the word "normal" can mean one thing inside your home and something entirely different outside your door!
              </p>
              <p>
                When I became a therapist, I wanted to help people talk about their challenges and their stories in a way that allowed them to uncover what "normal" meant to them. I wanted to help clients experience their lives in a way that fit with their personal needs, dreams, and expectations of a life well-lived.
              </p>
              <p>
                As the founder of Healing Roots Therapy, I believe therapy should be accessible, affordable, stigma-free, and tailored to each individual's unique needs and cultural background. It has been my mission to offer an empathetic & diverse team of therapists who provide customized treatment plans in a positive and comfortable environment — so you can find your normal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
