import React from "react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

export default function Home() {
  return (
    <div className="">
      <img
        className="relative h-[800px] w-full "
        src="assets/background.jpg"
        alt=""
      />
      <div className="flex items-center justify-between ">
        <LeftHome />
        <RightHome />
      </div>
    </div>
  );
}
