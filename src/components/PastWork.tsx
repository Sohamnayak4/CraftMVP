import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Interface for project data
interface Project {
  id: number;
  title: string;
  videoUrl: string;
  description: string;
}

// --- Framer Motion Animation Variants ---

// Reusable variants for both the title and description
const contentVariants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 10, // Animate out downwards for a smoother feel
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const PastWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "FocusTube",
      videoUrl: "public/Screen Recording 2025-06-13 103320.mp4", 
      description: "A chrome extension that helps you focus while using YouTube for work and education.",
    },
    {
      id: 2,
      title: "LuxeDrive",
      videoUrl: "public/Screen Recording 2025-06-13 110055.mp4",
      description: "A car rental website that allows users to rent cars from a wide variety of cars and locations.",
    },
    {
      id: 3,
      title: "ModernUI",
      videoUrl: "public/Screen Recording 2025-06-13 111403.mp4",
      description: "A modern UI design system for creating beautiful, responsive websites.",
    },
    {
      id: 4,
      title: "VoiceNotes",
      videoUrl: "public/Screen Recording 2025-06-13 120710.mp4",
      description: "A voice note app that allows users to take notes using their voice and save them to their phone without typing.",
    },
    // {
    //   id: 5,
    //   title: "MessageCraft",
    //   videoUrl: "public/Screen Recording 2025-06-13 104946.mp4",
    //   description: "An AI-powered cold message generator for LinkedIn, allowing users to generate detailed, personalized messages to connect with the right people.",
    // },
  ];

  // Navigation functions
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const activeProject = projects[currentIndex];

  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Carousel Container */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold text-white">Past Work</h1>
          <p className="text-gray-400">Check out some awesome projects I've worked on.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          
          {/* --- CHANGE 1: Title moved outside and above the video --- */}
          <div className="h-12"> {/* Wrapper to prevent layout shift during animation */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentIndex}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                variants={contentVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                {activeProject.title}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Main display area with video */}
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <AnimatePresence initial={false}>
              <motion.video
                key={currentIndex}
                src={activeProject.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline // Crucial for autoplay on iOS
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Controls and Description Area */}
          <div className="mt-6 flex justify-between items-end">
            <div className="w-2/3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  className="text-gray-300"
                  variants={contentVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  {activeProject.description}
                </motion.p>
              </AnimatePresence>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-4">
              <button 
                onClick={goToPrevious}
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="Next project"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
