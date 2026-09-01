import type { Metadata } from "next";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseGrid from "@/components/courses/CourseGrid";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Courses | stellarterm",
  description:
    "Learn markets the structured way. Explore 38 outcome-driven trading courses built to unlock your edge.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col selection:bg-cyan-100 selection:text-cyan-900">
      <main className="flex-1 flex flex-col">
        <CoursesHero />
        <CourseGrid />
      </main>
      <Footer />
    </div>
  );
}
