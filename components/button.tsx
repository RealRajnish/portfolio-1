import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-red-500 right-0 group-odd:left-0  top-1/2">
      {children}
    </button>
  );
};

export default Button;
