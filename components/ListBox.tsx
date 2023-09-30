import React from "react";

interface Props {
  title: string;
  text: string;
  bg: string;
}

function ListBox({ title, text, bg }: Props) {
  return (
    <div className="flex items-center justify-between rounded-md p-2 bg-[#181e21c1]">
      <h1 className="truncate text-sm max-w-[200px] md:max-w-[300px]">
        {title}
      </h1>
      <div className="flex gap-2 items-center text-sm">
        <div className={`rounded-full w-[12px] h-[12px] ${bg}`}></div>
        <p className="text-[10px] text-white text-center">{text}</p>
      </div>
    </div>
  );
}

export default ListBox;
