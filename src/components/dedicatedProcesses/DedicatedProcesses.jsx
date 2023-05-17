import React from "react";
import LeftDedicated from "./LeftDedicated";
import RightDediacted from "./RightDediacted";

export default function DedicatedProcesses() {
  return (
    <div className="w-full">
      <img
        className="relative w-full h-[40em]"
        src="assets/background.jpg"
        alt=""
      />
      <div className=" flex justify-between">
        <LeftDedicated />
        <RightDediacted />
      </div>
    </div>
  );
}
