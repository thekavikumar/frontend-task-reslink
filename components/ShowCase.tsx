import { Divider } from "@mui/material";
import React from "react";
import ListBox from "./ListBox";

interface Props {
  title: string;
  list: string[][];
}

function ShowCase({ title, list }: Props) {
  return (
    <div className="text-white border border-gray-600 rounded-md backdrop-blur-xl w-full bg-gray-800/20 bg-opacity-40 mt-[24px]  mb-[24px] mr-[28px] md:w-[514px]  ">
      <div className="flex items-center justify-between p-5 pb-2">
        <h1>{title}</h1>
        <button className="text-white/80 underline underline-offset-2 text-sm">
          See All
        </button>
      </div>
      <Divider className="bg-gray-600 w-full mt-2" />
      <div className="flex flex-col gap-3 p-5">
        {list.map((item) => (
          <ListBox title={item[0]} text={item[1]} bg={item[2]} />
        ))}
      </div>
    </div>
  );
}

export default ShowCase;
