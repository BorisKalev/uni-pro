import { services } from "@/app/constants/index";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
export default function Services() {
  return (
    <section className="bg-[#333333]">
      <div className="lg:max-w-6xl mx-auto">
        <div className="text-right pt-16">
          <p className="text-red-600 text-sm">QUE PROPOSONS-NOUS?</p>
          <h1 className="text-3xl tracking-wide font-bold">Nos services</h1>
          <button className="underline mt-6">Voir plus</button>
          <div className="bg-gradient-to-l from-red-600 to-[#333333] h-[2px] mt-3" />
        </div>

        <div className="flex items-center justify-center mt-[8rem]">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <h1 className="text-center font-semibold">{service.title}</h1>

              <div className="relative mt-5 mb-5 w-[300px] h-auto hover:rounded-lg overflow-hidden group hover:border-x-8 hover:border-t-8 hover:border-b-[55px] hover:border-red-600 transition-all duration-500 z-10">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="object-contain grayscale group-hover:grayscale-0"
                />

                <div className="absolute inset-0 flex items-center justify-center top-[10%] text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  <h1>Voir plus</h1>
                  <GoArrowUpRight className="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
