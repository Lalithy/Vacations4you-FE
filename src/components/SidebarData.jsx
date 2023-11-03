import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Cruise",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Activity",
    path: "/activity",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Package",
    path: "/package",
    icons: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
