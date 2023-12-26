"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./button";
import useProjectModal from "@/hooks/useProjectModal";

type ProjectProps = {
  project: (typeof projectsData)[number];
  id: number;
};

export default function Project({ project, id }: ProjectProps) {
  const { title, description, tags, imageUrl } = project;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { onOpen, setId } = useProjectModal();

  const handleClick = (id: number) => {
    onOpen();
    setId(id);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <button className="sm:hidden" onClick={() => handleClick(id)}>
            Learn more...
          </button>
        </div>

        <div
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        >
          <Image
            src={imageUrl[0]}
            alt="Project I worked on"
            width={450}
            height={450}
            quality={95}
          />
          <button
            onClick={() => handleClick(id)}
            className="dark:text-white/70 absolute top-[50%] group-odd:left-3/4 group-hover:translate-x-[-250%] group-even:right-3/4 group-even:group-hover:translate-x-[250%] transition z-10 bg-red-500"
          >
            learn more..
          </button>
          {/* <Button>Learn more..</Button> */}
        </div>
      </section>
    </motion.div>
  );
}
