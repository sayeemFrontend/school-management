import React from "react";
import { useRouteError } from "react-router-dom";

type errObj = {
  status: string;
  statusText: string;
};

export default function ErrorHandle() {
  const err: errObj = useRouteError() as errObj;
  console.log(err);

  return (
    <div>
      <h2 className="text-center">Hey you have an error {err.status}</h2>
      <h1>{err?.statusText}</h1>
    </div>
  );
}
