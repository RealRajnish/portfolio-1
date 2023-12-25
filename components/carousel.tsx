import React from "react";

export default function Carousel({ children }) {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{children}</div>
    </div>
  );
}
