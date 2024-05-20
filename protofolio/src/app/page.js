import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 px-12 py-4"> 
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  );
}
