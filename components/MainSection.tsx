import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function MainSection() {
  return (
    <div className="flex pt-[20px] md:ml-10 pl-4 pr-4 flex-col h-full w-full">
      <div className="flex items-center w-full justify-between">
        <div className="bg-[#101215] rounded-3xl flex items-center w-[342px] h-[46px]">
          <SearchIcon className="text-[#FEFEFE] ml-3" />
          <input
            type="text"
            className="outline-none text-white ml-2 bg-transparent border-none"
            placeholder="Search"
          />
        </div>
        <div className=" hidden md:flex items-center gap-3">
          <NotificationsOutlinedIcon className="text-[#FEFEFE]" />
          <button className="flex rounded-3xl bg-[#3FA268] p-2 pr-4 text-white text-sm items-center gap-2">
            <AddIcon className="text-[#FEFEFE]" />
            Create New Project
          </button>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default MainSection;
