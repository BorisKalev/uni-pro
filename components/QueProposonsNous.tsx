import brake from "@/app/images/brake-change.jpg";
import oilchange from "@/app/images/oil-change.jpg";
import transmission from "@/app/images/transmission-repair.jpg";
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

        <div className="flex items-center justify-center mt-10">
          <Image
            src={brake}
            alt="brake change"
            className="w-[350px] h-[300px]"
          ></Image>
          <Image
            src={oilchange}
            alt="brake change"
            className="w-[350px] h-[300px]"
          ></Image>
          <Image
            src={transmission}
            alt="brake change"
            className="w-[350px] h-[300px]"
          ></Image>
        </div>
      </div>
    </section>
  );
}
