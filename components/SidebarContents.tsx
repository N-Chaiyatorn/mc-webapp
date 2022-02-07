import { ReactElement } from "react";
import { HiMoon } from "react-icons/hi";
import * as RiIcons from "react-icons/ri";

interface Navbar {
  title: string;
  path: string;
  icon: ReactElement;
  iconClosed?: ReactElement;
  iconOpened?: ReactElement;
  subNav?: Subnav[] | null;
}

interface Subnav {
  title: string;
  icon: ReactElement;
}

export const SidebarContents: Navbar[] = [
  {
    title: "Metadata",
    path: "/metadata",
    icon: <HiMoon />,
  },
  {
    title: "Links",
    path: "/links",
    icon: <HiMoon />,
    subNav: null,
  },
  {
    title: "Telemetry",
    path: "/telemetry",
    icon: <HiMoon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Telemetry List",
        icon: <HiMoon />,
      },
      {
        title: "Realtime Telemetry",
        icon: <HiMoon />,
      },
      {
        title: "Historical Telemetry",
        icon: <HiMoon />,
      },
    ],
  },
  {
    title: "Events",
    path: "/events",
    icon: <HiMoon />,
    subNav: null,
  },
  {
    title: "Alarms",
    path: "/alarms",
    icon: <HiMoon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Alarms",
        icon: <HiMoon />,
      },
      {
        title: "Criterias",
        icon: <HiMoon />,
      },
      {
        title: "Edit Criterias",
        icon: <HiMoon />,
      },
    ],
  },
  {
    title: "Commands",
    path: "/commands",
    icon: <HiMoon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Command List",
        icon: <HiMoon />,
      },
      {
        title: "Command Interface",
        icon: <HiMoon />,
      },
      {
        title: "Command Set",
        icon: <HiMoon />,
      },
      {
        title: "Command Status",
        icon: <HiMoon />,
      },
      {
        title: "Command History",
        icon: <HiMoon />,
      },
    ],
  },
  {
    title: "Mission Planning",
    path: "/mission-planning",
    icon: <HiMoon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Scheduler",
        icon: <HiMoon />,
      },
      {
        title: "Contact Time",
        icon: <HiMoon />,
      },
      {
        title: "GroundTrack",
        icon: <HiMoon />,
      },
      {
        title: "Orbit",
        icon: <HiMoon />,
      },
      {
        title: "Collision Avoidance",
        icon: <HiMoon />,
      },
    ],
  },
];
