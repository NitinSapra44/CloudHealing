"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
      
      <AccordionItem value="item-1" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          How do I book a therapy session?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          Are online sessions available?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          What’s the difference between therapy and coaching?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          Do I need a subscription to access services?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          Can I switch therapists if I don’t feel the right connection?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="p-6 bg-white rounded-3xl mt-5 mb-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          Is my information and session history kept confidential?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="p-6 bg-white rounded-3xl mt-5">
        <AccordionTrigger className="text-4xl font-light font-poppins items-start text-left [&>svg]:h-8 [&>svg]:w-8">
          What’s the difference between therapy and coaching?
        </AccordionTrigger>
        <AccordionContent>
          Next.js is a React framework for building fast, full-stack web applications.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  );
}
