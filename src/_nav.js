import ideaLightBulbIcon from "@/assets/icons/idea light bulb.png";
import circuit from "./assets/icons/circuit.png";
import settingIcon from "./assets/icons/u_setting.png";
import leftArrowIcon from "@/assets/icons/u_left-arrow-to-left.png";

export default [
  {
    component: "CNavItem",
    name: "Get Started",
    to: "/",
    icon: "cil-puzzle",
  },
  {
    component: "CNavItem",
    name: "Analytics",
    to: "/analytics",
    icon: "cil-drop",
  },
  {
    component: "CNavItem",
    name: "Chat",
    to: "/chat",
    icon: "cil-file",
  },
  {
    component: "CNavItem",
    name: "API & Auth Keys",
    to: "/",
    icon: "cil-lightbulb",
  },
  {
    component: "CNavItem",
    name: "Announcement",
    to: "/",
    icon: "cil-bell",
  },
  {
    component: "CNavItem",
    name: "Settings",
    to: "/",
    icon: "cil-settings",
  },
  {
    component: "CNavTitle",
  },
  {
    component: "CNavItem",
    name: "Collapse",
    to: "/",
    icon: "cil-arrow-thick-to-left",
  },
];
