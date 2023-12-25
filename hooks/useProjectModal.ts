import { pid } from "process";
import { create } from "zustand";

interface ProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  id:number;
  setId:(pid:number)=>void
}

const useProjectModal = create<ProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  id:0,
  setId:(pid) => set({id:pid})
}));

export default useProjectModal;
