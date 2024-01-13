import React from "react";

import { LuGraduationCap } from "react-icons/lu";

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
    imageUrl: [
      "/assets/projects/1/image1.png",
      "/assets/projects/1/image2.png",
      "/assets/projects/1/image3.png",
      "/assets/projects/1/image4.png",
    ],
    demoLink: "https://rj-cutepets.cyclic.app",
    githubLink: "https://github.com/RealRajnish/ignou-project",
    describe:
      "Here we are using manual cookies based system for authentication and hashed password are stored for security point of view",
  },
  {
    title: "Spotify Clone",
    description:
      "A bueatiful music player inspired by popular music streaming platform Spotify.",
    tags: ["React", "NextJs", "TypeScript", "Tailwind CSS"],
    imageUrl: [
      "/assets/projects/1/image1.png",
      "/assets/projects/1/image2.png",
      "/assets/projects/1/image3.png",
      "/assets/projects/1/image4.png",
    ],
    demoLink: "https://spotify-clone-rj.vercel.app/",
    githubLink: "https://github.com/RealRajnish/spotify-clone",
    describe:
      "It is a beautiful music player app. Here we can upload our songs with their images. Payment system has also been integrated using Stripe. Authentication is implemented using Supabase as database and auth provider.",
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
