import React from "react";
import { mechanic, underCar } from "@/app/images";
import { GoArrowUpRight } from "react-icons/go";
export default function Apropos() {
  return (
    <section className="bg-[#333333]">
      <div className="lg:max-w-6xl mx-auto pb-28">
        <div className="flex flex-col">
          <h1 className="tracking-wide text-red-600 text-lg mt-[10rem]">
            À propos de nous
          </h1>
          <p className="text-3xl max-w-sm mt-5">
            Notre réputation parle pour elle-même
          </p>
          <p className="opacity-50 mt-10 max-w-lg">
            Depuis plus de 40 ans, Uni-Pro est votre partenaire de confiance
            pour l'entretien et la réparation automobile. Forte d'une expertise
            éprouvée et d'un savoir-faire exceptionnel, notre équipe s'engage à
            offrir des services de qualité, garantissant la fiabilité et la
            sécurité de votre véhicule. Faites confiance à notre expérience!
          </p>
          <div className="inline-flex items-center bg-red-600 px-4 py-2 mt-5 rounded-md hover:cursor-pointer">
            <button className="">Apprendre Plus</button>
            <GoArrowUpRight className="ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
