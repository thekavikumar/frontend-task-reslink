import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Profile() {
  return (
    <div className="flex gap-2 mt-3 ml-2 items-center">
      <img src="Avatar.png" alt="profile" />
      <div className="">
        <h1 className="text-[#FEFEFE] font-semibold text-sm">Olivia Rhye</h1>
        <p className="text-white font-light text-xs">olivia@untitledui.com</p>
      </div>
      <button className="ml-2">
        <ExitToAppIcon className="text-white" />
      </button>
    </div>
  );
}

export default Profile;
