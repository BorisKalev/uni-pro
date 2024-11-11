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
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: 2,
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: 3,
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: 4,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: 5,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: 6,
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: 7,
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: 8,
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: 9,
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
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
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag mt-10">Témoignages</div>
          </div>

          <h2 className="section-title mt-5">Quesque nos clients disent</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tooal for users around the world
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