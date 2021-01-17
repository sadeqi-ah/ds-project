import React from "react";
import "_/styles/Button.scss";

export type ButtonProps = {
  title: string;
  color: string;
};

const Button: React.FC<ButtonProps> = ({ children, title, color }) => {
  return (
    <div
      className="button"
      style={{
        fill: color,
        color: color,
      }}
    >
      <span className="bc" style={{ background: color }}></span>
      <div>{children}</div>
      <div>{title}</div>
    </div>
  );
};

export default Button;
