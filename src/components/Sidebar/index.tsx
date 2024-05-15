import { Avatar } from "@mui/material";
import { deepOrange, green, grey } from "@mui/material/colors";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AddchartIcon from "@mui/icons-material/Addchart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="h-screen  w-64 bg-stone-500 text-white flex flex-col items-center w-[200px] justify-around">
      <div>
        <Avatar
          sx={{ bgcolor: grey[500], width: 100, height: 100 }}
          variant="square"
        >
          C
        </Avatar>
      </div>
      <div className="mb-[200px]">
        <nav className="flex-1 p-4 ">
          <ul>
            <li className="flex items-center justify-center h-16 w-16  hover:bg-stone-700 rounded mb-2">
              <HomeIcon />
            </li>
            <li className="flex items-center justify-center h-16 w-16  hover:bg-stone-700 rounded mb-2">
              <BuildIcon />
            </li>
            <li className="flex items-center justify-center h-16 w-16  hover:bg-stone-700 rounded mb-2">
              <PendingActionsIcon />
            </li>
            <li className="flex items-center justify-center h-16 w-16  hover:bg-stone-700 rounded mb-2">
              <AddchartIcon />
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Avatar sx={{ bgcolor: grey[200], width: 100, height: 100 }}>
          <SettingsIcon
            sx={{
              color: "black",
              width: "50px",
              height: "50px",
            }}
          />
        </Avatar>
      </div>
    </div>
  );
};

export default Sidebar;
