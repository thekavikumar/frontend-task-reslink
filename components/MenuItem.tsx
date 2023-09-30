import React from "react";

interface MenuItemProps {
  icon: any;
  title: string;
  active?: boolean;
}

function MenuItem({ icon, title, active }: MenuItemProps) {
  return (
    <div
      className={`cursor-pointer ${
        active && "bg-[#101215]"
      } hover:bg-[#101215] rounded-md`}
    >
      <div className="flex text-[#F2F4F7] text-[14px] p-3 items-center">
        <div className="mr-2">{icon}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}

export default MenuItem;
