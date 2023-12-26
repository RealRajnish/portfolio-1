import React from "react";
import clsx from "clsx";
import Modal from "./modal";
import useProjectModal from "@/hooks/useProjectModal";
import MyCarousel from "./my-carousel";
import { projectsData } from "@/lib/data";

export default function ProjectModal() {
  const { onClose, isOpen, id } = useProjectModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  console.log(id);
  return (
    <div>
      <Modal showModal={isOpen} onClose={onClose}>
        <div className="dark:text-white dark:bg-black/60 p-4 w-[21rem] sm:w-[34rem]">
          <section className="w-[21rem] sm:w-[34rem] max-h-[20rem] ">
            <MyCarousel data={projectsData[id].imageUrl} />
          </section>
          <p>
            <span>
              <a href={projectsData[id].githubLink} target="_blank">
                githubLink
              </a>
            </span>
            <span>
              <a href={projectsData[id].demoLink} target="_blank">
                Live Demo
              </a>
            </span>
          </p>
          <p>{projectsData[id].describe}</p>

          <p>Info about the project {id} sey</p>
        </div>
      </Modal>
    </div>
  );
}
