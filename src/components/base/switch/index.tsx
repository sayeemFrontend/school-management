import React from "react";
import "./style.css";
type Props = {
  width: string;
  height: string;
  fill?: string;
  value: boolean;
  onClick: () => void;
  className?: string;
};
export default function Switch({ width, height, fill, value, onClick, className }: Props) {
  return (
    <div onClick={onClick} className={`switch ${className}`}>
      <div
        style={{ width: width, height: height, background: fill || "white", cursor: "pointer", position: "relative" }}
        className="bg-inherit border-2 border-primary-dark rounded-md"
      >
        <span className={value ? "right" : "left"}></span>
      </div>
    </div>
  );
}
