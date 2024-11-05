import React from "react";
import { IoCalendar } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
export default function Circle() {
  return (
    <>
      <div
        className="absolute flex items-center justify-center"
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          left: "17%",
          top: "",
        }}
      >
        <p className="text-red-600">1</p>
      </div>
      <div
        style={{
          backgroundColor: "red",
          borderRadius: "50%",
          height: "200px",
          width: "200px",
        }}
      ></div>
    </>
  );
}
