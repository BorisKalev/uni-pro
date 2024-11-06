import React from "react";

export default function Circle({ number, Icon }: any) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Small number circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-12 w-12 flex items-center justify-center text-red-600 font-bold">
        {number}
      </div>
      {/* Main red circle */}
      <div className="bg-red-600 rounded-full h-[150px] w-[150px] flex items-center justify-center text-white text-4xl">
        <Icon />
      </div>
    </div>
  );
}
