import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import carGarage from "@/app/images/garage-voiture-blanche.jpg";
import Hero from "@/components/Hero";

export default function HeroWithHeader() {
  return (
    <section className="relative w-full h-[100vh]">
      {/* Background image covering header + hero */}
      <Image
        src={carGarage}
        alt="Garage"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Optional vignette overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_50%)]" />

      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </section>
  );
}
