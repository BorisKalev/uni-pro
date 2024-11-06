import React from "react";
import Circle from "@/UI/Circle";
import { IoCalendar } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { MdOutlineCarCrash } from "react-icons/md";

export const circles = [
  {
    id: 1,
    title: "Schedule an Appointment",
    description:
      "The first step in getting your car repaired at Uni-Pro is to schedule an appontment. You can do this by phone, online, or by visiting our shop in person.",
    icon: IoCalendar,
  },
  {
    id: 2,
    title: "Diagnostic and Inspection",
    description:
      "When you bring your car in for repairs, our technicians will perform a comprehensive diagnostic and inspection to determine the root cause of any issue.",
    icon: MdOutlineCarCrash,
  },
  {
    id: 3,
    title: "Repair Work",
    description:
      "We will keep you informed of the progress of your repairs and let you know if any additional work is needed.",
    icon: GiAutoRepair,
  },
  {
    id: 4,
    title: "Quality Assurance",
    description:
      "We take great pride in the quality of our work and want to ensure that you are completely satisfied with the repairs we have done.",
    icon: PiUserCircleCheckFill,
  },
  {
    id: 5,
    title: "Payment and Pick-up",
    description:
      "We accept various forms of payment, including credit cards and cash, and can also work with your insurance company if you repairs are covered under your policy.",
    icon: FaMoneyCheckAlt,
  },
];
export default function CommentCaMarche() {
  return (
    <section className="lg:max-w-6xl py-28 sm:pt-32 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 tracking-wider">Comment ça marche</h1>
        <h1 className="text-3xl font-bold mt-2">Notre processus de Business</h1>
      </div>

      <div className="grid grid-cols-3 gap-10 justify-items-center mt-10">
        {circles.slice(0, 3).map((circle, index) => (
          <div
            key={circle.id}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <Circle number={index + 1} Icon={circle.icon} />
            <h2 className="font-bold mt-4">{circle.title}</h2>
            <p className="text-gray-400 mt-2">{circle.description}</p>
          </div>
        ))}

        <div className="col-span-3 grid grid-cols-2 gap-10 justify-center mt-10">
          {circles.slice(3, 5).map((circle, index) => (
            <div
              key={circle.id}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <Circle number={index + 4} Icon={circle.icon} />
              <h2 className="font-bold mt-4">{circle.title}</h2>
              <p className="text-gray-400 mt-2">{circle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
