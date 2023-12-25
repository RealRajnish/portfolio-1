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
            <MyCarousel
              data={[
                { image: "/assets/projects/1/image1.png" },
                { image: "/assets/projects/1/image2.jpg" },
                { image: "/assets/projects/1/image3.jpg" },
                { image: "/assets/projects/1/image4.jpg" },
              ]}
            />
          </section>
          <p>
            <span>github link</span>
            <span>live demo !</span>
          </p>
          <p>Description about the project</p>

          <p>Info about the project {id} sey</p>
        </div>
      </Modal>
    </div>
  );
}
