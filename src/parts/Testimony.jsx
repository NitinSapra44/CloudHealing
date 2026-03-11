"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Testimony({ setCarouselApi }) {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full"
      setApi={setCarouselApi} // pass API to parent
    >
      <CarouselContent className="gap-x-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-10">
              <Card
                className={
                  (index % 2 === 0 ? "bg-white text-black " : "bg-[#00373E] text-white ") +
                  "w-full rounded-[100px] h-[600px] p-8 " +
                  "transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                }
              >
                <CardContent className="flex flex-col justify-center p-10">
                  {/* Testimony Text */}
                  <p className="text-4xl font-light font-poppins leading-relaxed">
                    {index % 2 === 0
                      ? "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!"
                      : "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being."}
                  </p>

                  {/* Author */}
                  <p className="mt-4 text-3xl font-poppins font-semibold">
                    {index % 2 === 0 ? "— Anna R., 32" : "— Mark S., 41"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
