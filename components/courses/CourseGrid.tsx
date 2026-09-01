"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  price: string;
  image: string;
  category: string;
}

const CATEGORIES = [
  "Basic",
  "Advanced",
  "Risk Management",
  "Psychology",
  "Psy Web Tools",
  "All",
];

const COURSES: Course[] = [
  {
    id: 1,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-1.png",
    category: "Basic",
  },
  {
    id: 2,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-2.png",
    category: "Basic",
  },
  {
    id: 3,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-3.png",
    category: "Basic",
  },
  {
    id: 4,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-4.png",
    category: "Basic",
  },
  {
    id: 5,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-5.png",
    category: "Basic",
  },
  {
    id: 6,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-6.png",
    category: "Basic",
  },
  {
    id: 7,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-7.png",
    category: "Basic",
  },
  {
    id: 8,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-8.png",
    category: "Basic",
  },
  {
    id: 9,
    title: "Intro to forex trading",
    description:
      "Currency pairs, pip values, market sessions, and why most retail traders get the basics wrong.",
    lessons: 12,
    duration: "4.5h",
    price: "Free",
    image: "/images/course-9.png",
    category: "Basic",
  },
];

export default function CourseGrid() {
  const [activeCategory, setActiveCategory] = useState("Basic");

  const filteredCourses =
    activeCategory === "All"
      ? COURSES
      : COURSES.filter(
          (course) =>
            course.category === activeCategory || activeCategory === "Basic"
        );

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-14 py-8 sm:py-16">
      {/* Category Pills Filter: Horizontal scroll on mobile */}
      <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-14 pb-2">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-normal whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#006DEB] text-white border-2 border-[#006DEB]"
                  : "bg-transparent text-slate-500 border-2 border-slate-300 hover:border-slate-400 hover:text-slate-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Course Cards Grid: 2 Columns on Mobile, 3 on Desktop */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -5 }}
              key={course.id}
              className="flex flex-col rounded-[20px] sm:rounded-[32px] overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Top Background Image Container */}
              <div className="relative w-full h-[110px] sm:h-[220px] bg-[#050b14] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Content Body */}
              <div className="p-3 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[12.5px] sm:text-[20px] font-medium text-[#111827] tracking-tight leading-tight line-clamp-1 sm:line-clamp-none">
                    {course.title}
                  </h3>
                  <p className="text-[10px] sm:text-[14px] text-slate-400 font-normal leading-snug sm:leading-relaxed mt-1 sm:mt-2.5 line-clamp-2 sm:line-clamp-none">
                    {course.description}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-slate-200/80 my-2 sm:my-5" />

                  {/* Meta: Video Camera Icon + Timer Icon */}
                  <div className="flex items-center gap-2 sm:gap-6 text-[10px] sm:text-[14px] text-slate-600 font-normal">
                    <span className="inline-flex items-center gap-1 sm:gap-2">
                      <Icon icon="lucide:video" className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-[#006DEB]" />
                      <span>{course.lessons} lessons</span>
                    </span>
                    <span className="inline-flex items-center gap-1 sm:gap-2">
                      <Icon icon="lucide:timer" className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-[#006DEB]" />
                      <span>{course.duration}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Price & Action */}
                <div className="flex items-center justify-between mt-3 sm:mt-6 pt-1 sm:pt-2">
                  <span className="font-medium text-[12.5px] sm:text-[22px] text-[#111827]">
                    {course.price}
                  </span>

                  <Link
                    href={`/courses/${course.id}`}
                    className="px-3 py-1.5 sm:px-6 sm:py-2.5 bg-[#006DEB] hover:bg-[#005bb5] text-white text-[10.5px] sm:text-[14px] font-medium rounded-full shadow-xs hover:shadow-sm transition-all"
                  >
                    Start free
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
