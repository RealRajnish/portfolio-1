"use client";

import ProjectModal from "@/components/project-modal";
import { useEffect, useState } from "react";

// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/uploadModal";
// import { ProductWithPrice } from "@/types";

type ModalProviderProps = {};

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} /> */}
      <ProjectModal />
    </>
  );
};

export default ModalProvider;
