import React from "react";
import { navLinks } from "../../utils/constant";
import { Link } from "react-scroll";

export default function NavList() {
  return (
    <div className=" max-w-5xl ">
      <ul className="hidden md:flex items-center gap-10 text-base tracking-wide cursor-pointer">
        {navLinks.map(({ id, name, link }) => (
          <li key={id}>
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
