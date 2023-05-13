import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "subscribing", icon: <CgMusicNote />, type: "category" },
  { name: "Library", icon: <FiFilm />, type: "category" },
  { name: "History", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "Liked videos", icon: <ImNewspaper />, type: "category" },
  { name: "Watch later", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Music", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Show more",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
];
