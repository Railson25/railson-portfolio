import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import Ecomerce from "@/public/e-comerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Code Review",
    location: "Brazil",
    description: "Work reviewing students projects in html/css/js",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce",
    description:
      "My shop is a modern website developer just for fun, show a little bit about my skills",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: Ecomerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
] as const;
