import React from "react";
import Image from "next/image";
import Logo from "@/app/images/logo-unipro.png";
export default function Header() {
  return (
    <section className="lg:max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="Uni-Pro-Logo"
          className="w-[200px] h-[130px] object-contain"
        />
        <div className="flex items-center gap-12">
          <p>About</p>
          <p>Gallery</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </section>
  );
}
