import React from "react";
import * as IconNameGi from "react-icons/gi";
import * as IconNameMd  from "react-icons/md";

export const SidebarData = [
  {
    title: "Cruise Booking",
    path: "/",
    icon: <IconNameGi.GiShipBow />,
    cName: "nav-text",
  },
  {
    title: "Activity Booking",
    path: "/activity",
    icon: <IconNameMd.MdRowing />,
    cName: "nav-text",
  },
  {
    title: "Package Booking",
    path: "/package",
    icon: <IconNameMd.MdFlightTakeoff />,
    cName: "nav-text",
  },
];
