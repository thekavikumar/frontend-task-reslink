import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Box from "./Box";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShowCase from "./ShowCase";

function MainSection() {
  const list1 = [
    [
      "Thermal protective performance and mult",
      "Resume review",
      "bg-[#FDD26E]",
    ],
    [
      "Effect of heat flux and moisture content on the thermal protective performance of outer layer of fire pro",
      "Interview",
      "bg-[#CD7849]",
    ],
    ["Thermal protective performance and mult", "Task", "bg-[#73C2B4]"],
    [
      "Testing and evaluation of functional textiles",
      "Payment",
      "bg-[#44C677]",
    ],
  ];
  const list2 = [
    ["Interview is scheduled for 12PM", "6:29PM", "bg-[#73C2B4]"],
    ["Applicant applied on Technical researcher", "8:21PM", "bg-[#FDD26E]"],
    ["Interview is cancelled", "7:10PM", "bg-[#CD7849]"],
    ["Applicant applied on Technical researcher", "6:29PM", "bg-[#FDD26E]"],
  ];

  return (
    <div className="flex pt-[20px] md:ml-10 pl-4 pr-4 flex-col h-screen w-full ">
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
      <div className="div_hero-blur-bg flex-shrink-0 w-[836.73px] h-[836.73px] opacity-[0.09] rounded-full bg-[#3fa268]" />
      <div className="mt-10 flex flex-col">
        <div className=" text-white">
          <h1 className="text-[30px] font-semibold">Welcome back, Olivia</h1>
          <p className="text-slate-300">
            Track, manage researchers and submissions.
          </p>
        </div>
        <div className="flex mt-6 gap-6 items-center flex-col md:flex-row">
          <Box
            number="07"
            icon={<Person2OutlinedIcon />}
            text="Active Projects"
          />
          <Box number="04" icon={<EditNoteOutlinedIcon />} text="Proposals" />
          <Box
            number="03"
            icon={<BookmarkBorderOutlinedIcon />}
            text="Active Jobs"
          />
          <Box
            number="240"
            icon={<RemoveRedEyeOutlinedIcon />}
            text="Application"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <ShowCase title="Posted Projects" list={list1} />
          <ShowCase title="Recent Activities" list={list2} />
        </div>
      </div>
      <div className="border-t hidden md:block z-50 bg-[#1f2129] p-2 absolute right-0 left-0 md:ml-[260px] bottom-0 border-gray-700 text-gray-500">
        <p>Copyright © 2023. Reslink. All rights reserved.</p>
      </div>
    </div>
  );
}

export default MainSection;
