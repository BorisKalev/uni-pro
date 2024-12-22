import React from "react";
import Image from "next/image";
import voiture from "@/app/images/voiture.png";
export default function Hero() {
  return (
    <section className="lg:max-w-6xl mx-auto ">
      <div className="mt-16">
        <div className="bg-red-500 p-2 w-[300px] h-[40px] skew-x-[20deg] flex justify-center items-center">
          <div className="-skew-x-[20deg]">
            <h2 className="tracking-widest">BIENVENUE À UNI-PRO</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <h1 className="text-6xl max-w-3xl font-serif">
          Votre partenaire de <span className="text-red-600">confiance</span>{" "}
          pour l'entretien et la réparation automobile.
        </h1>
        <p className="opacity-50 mt-8 max-w-xl">
          Nous offrons des services fiables et efficaces pour garantir que votre
          véhicule soit toujours en parfait état. Laissez-nous prendre soin de
          votre voiture afin que vous puissiez vous concentrer sur ce qui compte
          le plus.
        </p>
      </div>

      <div className="bg-red-black-center from-red-500 to-[##171717] h-[5px] mt-24" />
    </section>
  );
}
