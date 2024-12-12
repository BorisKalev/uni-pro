"use client";
import React from "react";
import avatar1 from "@/app/images/avatar-1.png";
import avatar2 from "@/app/images/avatar-2.png";
import avatar3 from "@/app/images/avatar-3.png";
import avatar4 from "@/app/images/avatar-4.png";
import avatar5 from "@/app/images/avatar-5.png";
import avatar6 from "@/app/images/avatar-6.png";
import avatar7 from "@/app/images/avatar-7.png";
import avatar8 from "@/app/images/avatar-8.png";
import avatar9 from "@/app/images/avatar-9.png";
import { motion } from "framer-motion";
import Image from "next/image";
const testimonials = [
  {
    id: 1,
    text: "Le service est impeccable ! Ils ont rapidement diagnostiqué le problème de ma voiture et l'ont réparée en un rien de temps.",
    imageSrc: avatar1.src,
    name: "Alexandre Dupuis",
    username: "alex.dupuis91",
  },
  {
    id: 2,
    text: "Je fais confiance à ce garage depuis des années. Toujours professionnel et honnête dans leurs évaluations.",
    imageSrc: avatar2.src,
    name: "Sophie Tremblay",
    username: "sophie_tremb23",
  },
  {
    id: 3,
    text: "Leur inspection avant achat m'a évité de gros problèmes avec une voiture d'occasion. Merci pour votre expertise !",
    imageSrc: avatar3.src,
    name: "Marc Lemoine",
    username: "marc.lemoine",
  },
  {
    id: 4,
    text: "L'équipe est accueillante et les réparations sont toujours effectuées dans les délais annoncés. Une vraie tranquillité d'esprit.",
    imageSrc: avatar4.src,
    name: "Isabelle Morel",
    username: "isa_morel_75",
  },
  {
    id: 5,
    text: "Je suis ravi du résultat. Ils ont même lavé ma voiture après les réparations !",
    imageSrc: avatar5.src,
    name: "Thomas Gagnon",
    username: "thomasg90",
  },
  {
    id: 6,
    text: "Leur système de rendez-vous en ligne est super pratique, et les techniciens expliquent toujours clairement les réparations nécessaires.",
    imageSrc: avatar6.src,
    name: "Claire Pelletier",
    username: "c.pelletier1988",
  },
  {
    id: 7,
    text: "Une équipe passionnée et des prix transparents. C'est rare de trouver un garagiste aussi fiable.",
    imageSrc: avatar7.src,
    name: "Julien Rousseau",
    username: "julrouss",
  },
  {
    id: 8,
    text: "Ils ont réparé mon moteur en urgence avant un long voyage. Je recommande sans hésitation.",
    imageSrc: avatar8.src,
    name: "Nathalie Caron",
    username: "nathalie.caron_01",
  },
  {
    id: 9,
    text: "Leur service après-vente est excellent. Ils répondent toujours rapidement à mes questions.",
    imageSrc: avatar9.src,
    name: "François Bergeron",
    username: "francois.b.17",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration || 10,
      }}
      className={"flex flex-col gap-6 pb-6"}
    >
      {[
        [...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(
              ({ id, text, imageSrc, name, username }) => (
                <div className="card" key={id}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        )),
      ]}
    </motion.div>
  </div>
);

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="">
      <div className="container">
        <div className="section-heading pt-10 text-red-600">
          <h2 className="mt-10 text-center text-3xl">
            Quesque nos clients disent
          </h2>
          <p className="section-description mt-5">
            De la qualité de notre service à notre expertise technique, nos
            clients nous font confiance pour entretenir et réparer leurs
            véhicules. Découvrez leurs témoignages et voyez pourquoi nous sommes
            leur choix de confiance.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
