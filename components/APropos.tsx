import React from "react";
import { mechanic, underCar } from "@/app/images";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function Apropos() {
  return (
    <section className="bg-[#333333]">
      <div className="lg:max-w-6xl mx-auto pb-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          {/* Section de texte et bouton */}
          <div className="flex flex-col max-w-lg lg:mr-10">
            <h1 className="tracking-wide text-red-600 text-lg mt-[10rem]">
              À propos de nous
            </h1>
            <p className="text-3xl max-w-sm mt-5 font-bold">
              Notre réputation parle pour elle-même
            </p>
            <p className="opacity-50 mt-10">
              Depuis plus de 40 ans, Uni-Pro est votre partenaire de confiance
              pour l'entretien et la réparation automobile. Forte d'une
              expertise éprouvée et d'un savoir-faire exceptionnel, notre équipe
              s'engage à offrir des services de qualité, garantissant la
              fiabilité et la sécurité de votre véhicule. Faites confiance à
              notre expérience!
            </p>
            <div className="inline-flex items-center bg-red-600 px-4 py-2 mt-10 rounded-md hover:cursor-pointer text-white">
              <button className="inline-flex items-center">
                Apprendre Plus
                <GoArrowUpRight className="ml-1" />
              </button>
            </div>
          </div>

          {/* Section des images */}
          <div className="relative flex space-x-10 mt-10 lg:mt-0">
            <Image
              src={mechanic}
              alt="Mechanic working on car"
              className="absolute right-[50%] top-[40%] w-[300px] h-[350px] object-cover rounded-xl grayscale"
            />
            <Image
              src={underCar}
              alt="Mechanic under car"
              className="w-[300px] h-[350px] object-cover rounded-xl grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
