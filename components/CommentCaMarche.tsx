import React from "react";
import Circle from "@/UI/Circle";
export default function CommentCaMarche() {
  return (
    <section className="lg:max-w-6xl py-28 sm:pt-32 mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 tracking-wider">Comment ca marche</h1>
        <h1 className="text-3xl font-bold">Notre processus de Buissness</h1>
      </div>

      <div className="grid grid-rows-3 mt-10">
        <Circle />
      </div>
    </section>
  );
}
