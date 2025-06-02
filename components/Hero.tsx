import React from "react";
export default function Hero() {
  return (
    <div className="lg:max-w-6xl mx-auto px-4 pt-[5%]">
      <div className="bg-red-500 p-2 w-[300px] h-[40px] skew-x-[20deg] flex justify-center items-center">
        <div className="-skew-x-[20deg]">
          <h2 className="tracking-widest text-white">BIENVENUE À UNI-PRO</h2>
        </div>
      </div>

      <div className="flex flex-col mt-8 text-white">
        <h1 className="text-6xl max-w-3xl font-serif">
          Votre partenaire de <span className="text-red-600">confiance</span>{" "}
          pour l'entretien et la réparation automobile.
        </h1>
        <p className="opacity-80 mt-8 max-w-xl">
          Nous offrons des services fiables et efficaces pour garantir que votre
          véhicule soit toujours en parfait état.
        </p>
      </div>

      <div className="bg-red-600 h-[5px] mt-24 w-[200px]" />
    </div>
  );
}
