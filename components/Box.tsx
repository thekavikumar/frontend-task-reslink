import React from "react";

interface BoxProps {
  number: string;
  icon: any;
  text: string;
}

function Box({ number, icon, text }: BoxProps) {
  return (
    <div className="flex backdrop-blur-3xl bg-gray-800/20  items-center justify-between md:w-[244px] w-full h-[122px] p-5 border border-gray-600 rounded-md">
      <div className="flex text-white flex-col">
        <h1 className="text-[36px] font-semibold">{number}</h1>
        <p className="font-light">{text}</p>
      </div>
      <div className="rounded-full flex items-center justify-center h-[50px] w-[50px] bg-[#3FA268] text-white">
        <div className="">{icon}</div>
      </div>
    </div>
  );
}

export default Box;
