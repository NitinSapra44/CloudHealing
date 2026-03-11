import Link from "next/link";

export default function CardAnkit() {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-[20px] gap-3 p-4 transition-transform duration-300 ease-in-out hover:scale-105">
      
      <Link href="/therapist/angad">
        {/* Name */}
        <div>
          <span className="text-2xl font-poppins font-light">
            Meet Angad
          </span>
        </div>

        {/* Title & Location */}
        <div>
          <span className="text-base font-poppins font-light">
            CEO, Toronto, Canada
          </span>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center mt-5">
          <img src="/Angad.png" width={200} height={200} alt="Ankit" />
        </div>

        {/* Arrow Button */}
        <div className="flex justify-start mt-2">
          <button>
            <img src="/Arrow-card.png" width={20} height={20} alt="Arrow" />
          </button>
        </div>
      </Link>
      
    </div>
  );
}
