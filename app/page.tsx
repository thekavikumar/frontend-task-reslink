"use client";
import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <main className="flex pr-4 pt-0">
      <div className={``}>
        <div className="flex">
          {open && (
            <div className=" w-[280px]">
              <Sidebar />
            </div>
          )}
          <div className="md:hidden mt-6 ml-3">
            <button className="md:hidden " onClick={toggleSidebar}>
              {!open ? (
                <DehazeIcon className="text-white" />
              ) : (
                <CloseIcon className="text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>
      {!open && <MainSection />}
    </main>
  );
}
