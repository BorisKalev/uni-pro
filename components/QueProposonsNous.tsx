import { services } from "@/app/constants/index";
import Image from "next/image";

export default function QueProposonsNous() {
  return (
    <section className="bg-[#333333]">
      <div className="lg:max-w-6xl mx-auto">
        <div className="text-right pt-16">
          <p className="text-red-600 text-sm">QUE PROPOSONS-NOUS?</p>
          <h1 className="text-3xl tracking-wide ">Nos services</h1>
          <button className="underline mt-6">Voir plus</button>
          <div className="bg-gradient-to-l from-red-600 to-[#333333] h-[2px] mt-3" />
        </div>

        <div className="flex items-center justify-center mt-[8rem] ">
          {services.map((service) => (
            <div className="flex flex-col">
              <h1 className="text-center font-semibold">{service.title}</h1>
              <div className="mt-5 mb-5 w-[300px] h-auto rounded-lg hover:border-x-8 hover:border-t-8 hover:border-b-[55px] hover:border-red-600 transition-all duration-500">
                <Image
                  src={service.img}
                  alt={service.title}
                  key={service.id}
                  className="object-contain grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
