import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function LeftHome() {
  const [text] = useTypewriter({
    words: [
      "In Africa, we invest in providing affordable edufinancing that makes it possible for high-potential Africans to access quality education, high-demand skills training, and professional certifications within Africa.",
    ],
    loop: 1,
    typeSpeed: 70,

    delaySpeed: 2000,
  });
  return (
    <div className=" flex items-center flex-col">
      <div className="absolute left-[7em] top-[20em] w-[42em]">
        <p className="text-3xl font-bold text-base leading-[1.5em] tracking-wide">
          {text}
        </p>
      </div>

      <div className="absolute left-[7em] top-[40em]">
        <button className="capitalize bg-[#cf2e2e] py-[15px] px-[30px] text-white cursor-pointer rounded font-bold text-xl">
          Commence your educational journey here
        </button>
      </div>
    </div>
  );
}
