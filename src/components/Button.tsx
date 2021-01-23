import React from "react";
import "_/styles/Button.scss";

export type ButtonProps = {
  title?: string;
  color: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, title, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="button"
      style={{
        fill: color,
        color: color,
        padding: `${title ? "10px" : 0} ${title ? "20px" : 0}`,
      }}
    >
      <span className="bc" style={{ background: color }}></span>
      <div>{children}</div>
      {title && <div className="btn-title">{title}</div>}
    </div>
  );
};

export default Button;
