import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4"> 
        <HeroSection/>
      </div>
    </main>
  );
}
