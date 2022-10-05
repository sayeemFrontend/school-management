import React from "react";
import { Link } from "react-router-dom";
import { styleType } from "../../../common-types/types";

type Props = styleType & {
  url: string;
};

export default function CustomLink(props: Props) {
  const { children, className, url } = props;
  return (
    <Link to={url} className={className ? className : "custom-link"}>
      {children}
    </Link>
  );
}
