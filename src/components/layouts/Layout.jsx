import React from "react";

export default function Layout({ description, button, image }) {
  return (
    <div>
      <div>
        <p className="w-[37em] font-medium text-xl leading-9 tracking-wide text-justify">
          {description}
        </p>
      </div>
      <div>
        <img className="w-[44em] rounded-2xl" src={image} alt="" />
      </div>
    </div>
  );
}
