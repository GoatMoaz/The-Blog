"use client";

import { useEffect } from "react";
import { useGSAP } from "@/hooks/useGSAP";

export default function Home() {
  const { slideInLeft } = useGSAP();

  useEffect(() => {
    // Animate elements on page load
    slideInLeft(".hero-title", 1, 0.2);
   
  }, [slideInLeft]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-16">
        {/* Hero Section */}
        <section className="text-center py-20 border-y">
          <h1 className="hero-title text-7xl md:text-[160px] xl:text-[243px] font-bold text-foreground mb-6 opacity-0">
            The Blog
          </h1>
        </section>

        {/* Featured Posts */}
      </main>
    </div>
  );
}
