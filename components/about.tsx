"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span>
          👋 Hello! I'm Rajnish Kumar, a Full Stack Developer specializing in
          the MERN stack—MongoDB, Express.js, React.js, and Node.js.
        </span>
        <br />
        <span>
          With a BCA background, I'm passionate about transforming ideas into
          dynamic web applications. From crafting responsive front-end
          interfaces to architecting robust back-end systems, I bring a holistic
          approach to every project.
        </span>
        <br />
        <span>
          As a recent graduate, I've already made waves with projects like an
          e-commerce platform and a Spotify clone. My dedication is fueled by
          the endless potential of the web, aiming to deliver seamless user
          experiences and contribute to the ever-evolving landscape of web
          development.
        </span>
        <br />
        <span>
          When I'm not immersed in code, you'll find me enjoying my other love —
          music.
        </span>
      </p>
    </motion.section>
  );
}
