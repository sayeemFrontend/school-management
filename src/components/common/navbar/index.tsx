import React from "react";
import { useState } from "react";
import dropDownIcon from "../../../assets/downIcon.svg";

type LangProps = {
  defaultValue?: string;
  icon?: React.ReactElement<HTMLImageElement>;
  options: { id: string | number; title: string }[];
};

export function Language(props: LangProps) {
  const { defaultValue, icon, options } = props;
  const [expand, setExpand] = useState(false);
  const [header, setHeader] = useState(defaultValue || options[0].title);

  const handleItemClick = (title: string) => {
    setHeader(title);
    setExpand(false);
  };
  return (
    <div style={{}} className="dropDown">
      <ul onClick={() => setExpand(!expand)} className="flex items-center cursor-pointer">
        <li className="overflow-auto mr-1">{header}</li>
        {icon && <li className={`ml-auto transition-all ease-in-out ${expand && "rotate-180"}`}>{icon}</li>}
      </ul>
      {expand && (
        <div className="drop-body absolute p-4 shadow-md z-10 bg-secondary-dark">
          <ul className="flex flex-col ">
            {options?.map((item) => (
              <li
                className="py-2 my-1 cursor-pointer hover:opacity-75"
                key={item.id}
                onClick={() => handleItemClick(item.title)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type NavbarProps = {
  height: string;
  bgColor?: string;
  shadow?: string;
  sticky?: boolean;
  top?: string;
  fontSize?: string;
};
export default function Navbar(props: NavbarProps) {
  const { height, bgColor = "inherit", sticky, top = "0px", fontSize = "12px" } = props;
  const icon = <img width="12px" src={dropDownIcon} alt="icon" />;
  return (
    <div
      style={{
        width: "100%",
        height: height,
        fontSize: fontSize,
        background: bgColor,
        position: sticky ? "sticky" : "fixed",
        top: top,
      }}
    >
      <div className="container h-full flex items-center">
        <ul className="ml-auto">
          <Language
            options={[
              { id: 1, title: "English" },
              { id: 2, title: "Bangla" },
            ]}
            icon={icon}
          />
        </ul>
      </div>
    </div>
  );
}
