import React from "react";
import "./Input.css";

type Props = {
  placeholder?: string;
  onChange?: (e: any) => void;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  type?: string;
  fontSize?: string;
  className?: string;
  boxShadow?: string;
  focus?: {
    bgColor?: string;
    color?: string;
    border?: string;
  };
  leftIcon?: string;
  rightIcon?: string;
  brRadius?: string;
};

export default function Input(props: Props) {
  const [hasFocus, setFocus] = React.useState(false);
  const {
    width,
    height,
    bgColor,
    type,
    color,
    onChange,
    placeholder,
    boxShadow,
    border,
    fontSize,
    focus,
    leftIcon,
    rightIcon,
    brRadius,
  } = props;

  const styleSheet = {
    width: width || "100%",
    height: height || "40px",
    backgroundColor: focus && hasFocus ? focus.bgColor : bgColor || "inherit",
    color: focus && hasFocus ? focus.color : color || "inherit",
    border: focus && hasFocus ? focus.border : border || "none",
    fontSize: fontSize || "inherit",
    boxShadow: boxShadow || "inherit",
    borderRadius: brRadius || "none",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  };

  return (
    <div onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={styleSheet} className="input-wrapper">
      <div className="input-field">
        {leftIcon && <img className="p-[6px] pr-0" src={leftIcon} alt="icon" />}
        <input onChange={onChange} type={type || "text"} placeholder={placeholder || ""} />
        {rightIcon && <img className="p-[6px] pl-0" src={rightIcon} alt="icon" />}
      </div>
    </div>
  );
}
