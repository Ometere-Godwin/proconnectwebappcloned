import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../../utils/constant";

export default function MenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCllick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-white">
      <div className="block md:hidden" onClick={handleCllick}>
        {!menuOpen ? (
          <Close className="font-[30px]" />
        ) : (
          <Menu className="font-[30px]" />
        )}
      </div>

      <div
        className={
          !menuOpen
            ? "fixed top-0 left-0 w-[40%] h-full border-r border-r-gray-600 bg-[white] ease-in-out duration-500"
            : "fixed left-[100%]"
        }
      >
        <img className="w-[7em]" src="assets/logo.png" alt="" />

        <ul className="md:flex-col md:flex items-center gap-10 text-base tracking-wide cursor-pointer">
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
    </div>
  );
}
