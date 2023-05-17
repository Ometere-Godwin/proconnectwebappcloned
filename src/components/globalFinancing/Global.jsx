import React from "react";
import GlobalLeft from "./GlobalLeft";
import GlobalRight from "./GlobalRight";

export default function Global() {
  return (
    <div className="flex justify-between items-center mx-24 my-20">
      <GlobalLeft />
      <GlobalRight />
    </div>
  );
}
