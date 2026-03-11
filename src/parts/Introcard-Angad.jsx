import Link from "next/link";

export default function CardAngad() {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-[40px] gap-3 p-8 transition-transform duration-300 ease-in-out hover:scale-105">
      
      <Link href="/therapist/angad">
        {/* Name */}
        <div>
          <span className="text-5xl font-poppins font-light">
            Meet Angad
          </span>
        </div>

        {/* Title & Location */}
        <div>
          <span className="text-3xl font-poppins font-light">
            CEO, Toronto, Canada
          </span>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center mt-10">
          <img src="/Angad.png" width={400} height={400} alt="Angad" />
        </div>

        {/* Arrow Button */}
        <div className="flex justify-start mt-4">
          <button>
            <img src="/Arrow-card.png" width={60} height={60} alt="Arrow" />
          </button>
        </div>
      </Link>
      
    </div>
  );
}
