import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="custom-btn btn-7">
      <span>{children}</span>
    </button>
  );
};

export default Button;
