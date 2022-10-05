import React from "react";
import { styleType } from "../../../common-types/types";
import "./Button.css";

type Props = {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  opacity?: string;
  disabled?: boolean;
  cursor?: string;
  hover?: {
    bgColor?: string;
    color?: string;
    border?: string;
    opacity?: string;
  };
};

export default function Button(props: Props) {
  const [hasHover, setHover] = React.useState(false);
  const { children, onClick, title, width, height, bgColor, color, border, disabled, cursor, opacity, hover } = props;
  const styleSheet = {
    width: width || "100%",
    height: height || "40px",
    backgroundColor: hasHover && hover ? hover.bgColor : bgColor || "inherit",
    opacity: hasHover && hover ? hover.opacity : opacity || "1",
    color: hover && hasHover ? hover.color : color || "black",
    border: hover && hasHover ? hover.border : border || "none",
    cursor: cursor || "pointer",
  };
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled || false}
      onClick={onClick}
      style={styleSheet}
      className="button"
    >
      {children && children}
      {title && title}
    </button>
  );
}

type ButtonProps = styleType & {
  label: string;
};

export const CustomButton = (props: ButtonProps) => {
  const { styles, className, children, label } = props;
  return (
    <button style={styles} className={className}>
      {label ? label : children}
    </button>
  );
};
