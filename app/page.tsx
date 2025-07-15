"use client";
import Feedback from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="container w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Feedback />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
