import React, { useState } from "react";
import { motion } from "framer-motion";

// Testimonial data array
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, this product instantly grabbed my attention.",
    imageSrc: "",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: "",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "",
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  // Duplicate testimonials for a seamless loop
  const items = [...testimonials, ...testimonials];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gray-900 py-20 relative">
      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What our users say
          </h2>
          <p className="text-gray-300">
            This component demonstrates a seamless, looping marquee of testimonials that slows down on hover.
          </p>
        </div>
        
        {/* This parent container establishes the positioning context for the overlays */}
        <div className="relative w-full md:w-[90vw] mx-auto flex flex-col items-center">

          {/* This is the container that listens for hover events */}
          <div
            className="overflow-hidden w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex gap-8 py-2"
              style={{ minWidth: "fit-content" }}
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: isHovered ? 75 : 30, // Slows down from 30s to 75s on hover
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {items.map((testimonial, idx) => (
                <div
                  key={testimonial.name + "-" + idx}
                  className="flex-shrink-0 w-[420px] md:w-[520px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl p-8 flex flex-col justify-between min-h-[260px]"
                >
                  <div className="text-gray-100 text-lg mb-6">
                    {testimonial.text}
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">
                        {testimonial.name}
                      </div>
                      <div className="leading-5 tracking-tight text-purple-400">
                        {testimonial.username}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* FADE OVERLAYS - MOVED OUTSIDE THE HOVER CONTAINER */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
            style={{
              background: "linear-gradient(to right, #111827 70%, transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
            style={{
              background: "linear-gradient(to left, #111827 70%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
