"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Header1() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollOrNavigate = (id) => {
    if (pathname === "/") {
      // On home page → scroll
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On another page → navigate to home with hash
      router.push(id === "home" ? "/" : `/#${id}`);
    }
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full p-10 bg-transparent">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center px-4 sm:px-6 py-4 md:py-6">
        <h1 className="font-roboto text-2xl sm:text-3xl font-light text-black drop-shadow">
          <Link href="/">Cloud Healing</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block justify-center">
          <ul className="flex gap-6 lg:gap-10 font-roboto font-light text-lg lg:text-2xl text-black drop-shadow items-center">
            <li
              className="cursor-pointer border-b-2 border-transparent hover:border-white transition"
              onClick={() => handleScrollOrNavigate("our-therapists")}
            >
              Our Therapist
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
              <Link href="/contact-us">Get in Touch</Link>
            </li>
            <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
              <Link href="/blog/all">Blog</Link>
            </li>
            <li>
              <Link href="/contact-us">
                <button className="px-6 py-3 rounded-2xl bg-[#00373E] text-white font-poppins text-xl font-light shadow-md hover:bg-[#005056] transition-all duration-300">
                  Book Now
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu using shadcn dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="Toggle menu">
                <Menu size={28} className="text-black drop-shadow" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="w-screen left-0 !rounded-none !p-0 bg-white font-roboto text-lg text-black"
            >
              <DropdownMenuItem
                onClick={() => handleScrollOrNavigate("home")}
                className="cursor-pointer hover:text-emerald-600 w-full justify-center py-3"
              >
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleScrollOrNavigate("our-therapists")}
                className="cursor-pointer hover:text-emerald-600 w-full justify-center py-3"
              >
                Our Therapist
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="w-full justify-center py-3">
                <Link href="/contact-us" className="hover:text-emerald-600 w-full text-center">
                  Get in Touch
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="w-full justify-center py-3">
                <Link href="/blog/all" className="hover:text-emerald-600 w-full text-center">
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="w-full justify-center py-3">
                <Link href="/contact-us" className="w-full flex justify-center">
                  <button className="px-6 py-3 rounded-full bg-[#00373E] text-white font-poppins text-lg font-light shadow-md hover:bg-[#005056] transition-all duration-300">
                    Book Now
                  </button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
