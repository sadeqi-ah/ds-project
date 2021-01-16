import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

export type ScrollLayoutProps = {
  width: string | number;
  height: string | number;
};

const ScrollLayout: React.FC<ScrollLayoutProps> = ({
  children,
  width,
  height,
}) => {
  const renderThumb = ({ style, ...props }: { style: any }) => {
    return (
      <div
        style={{
          ...style,
          background: "#E6E8EB",
          width: 3,
          borderRadius: "10px",
        }}
        {...props}
      />
    );
  };

  return (
    <Scrollbars style={{ width, height }} renderThumbVertical={renderThumb}>
      {children}
    </Scrollbars>
  );
};

export default ScrollLayout;
