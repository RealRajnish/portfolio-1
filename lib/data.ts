import React from "react";

import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import cutepetFrontend from '@/public/assets/projects/1/image1.png'

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
    title: "Graduated BCA",
    location: "IGNOU, India",
    description:
      "I have done Bachelor's in Computer Application. This course is mainly focused on programming languages like C, C++, Java, web programming as well as other computer core concepts",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "CutePets",
    description:
      "Its a kind of fullstack e-commerce web app which i made during my graduation as a project focused on shopping pets online.",
    tags: ["React", "Express", "MongoDB", "Styled-components"],
    imageUrl: cutepetFrontend,
    link:'https://rj-cutepets.cyclic.app/'
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: cutepetFrontend,
    link:''
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: cutepetFrontend,
    link:''
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
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;