import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero"; 

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      <Hero />
      
      <div className="h-[50vh] bg-linear-to-b from-black to-studio-black" />
    </main>
  );
}