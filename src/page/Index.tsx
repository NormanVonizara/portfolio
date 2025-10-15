import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Index () {
      return (
            <div className="min-h-screen bg-background">
                  <Navbar />
                  <Hero />
                  <About />
            </div>
      )
}