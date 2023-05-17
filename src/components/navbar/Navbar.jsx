import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import GetStarted from "./GetStarted";
import MenuToggle from "./MenuToggle";

export default function Navbar() {
  return (
    <div className="px-4 max-w-[90rem] h-24 mx-auto flex justify-between items-center sticky top-0 z-50 bg-white ">
      <Logo />
      <NavList />
      <GetStarted />
      <MenuToggle />
    </div>
  );
}
