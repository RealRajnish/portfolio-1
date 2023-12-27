import React from "react";
import Modal from "./modal";
import useProjectModal from "@/hooks/useProjectModal";
import MyCarousel from "./my-carousel";
import { projectsData } from "@/lib/data";
import Button from "./button";

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
        <div className="p-1 w-[21rem] sm:w-[34rem]">
          <section className="w-[21rem] sm:w-[34rem] max-h-[20rem] shadow-2xl ">
            <MyCarousel data={projectsData[id].imageUrl} />
          </section>
          <div className="flex gap-2 mt-3 mb-2 text-black">
            <Button>
              <a href={projectsData[id].githubLink} target="_blank">
                Source Code
              </a>
            </Button>

            <Button>
              <a href={projectsData[id].demoLink} target="_blank">
                Live Demo
              </a>
            </Button>
          </div>
          <h3 className="text-black text-lg font-bold">
            {projectsData[id].title}
          </h3>
          <hr />
          <p className="max-h-24 sm:max-h-40 overflow-y-auto bg-white text-black p-0.5">
            {projectsData[id].describe}
          </p>
        </div>
      </Modal>
    </div>
  );
}
