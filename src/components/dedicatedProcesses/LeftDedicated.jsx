import React from "react";
import Layout from "../layouts/Layout";

export default function LeftDedicated() {
  return (
    <div className="left-20 top-[102em] absolute">
      <Layout description="Our processes are dedicated to moulding our candidates to be firm in character (good behaviour) and firm in the results (excellence) they bring to the table. Our Candidates are given a clear mandate to test their start-up ideas during their Academic Program, get connected to co-founders and a start-up team, and work towards the simple GOAL of building a Minimum Viable Product that can be BETA-TESTED in the market then work towards an outcome of raising initial venture capital to pilot their operations at the end of their Academic Program in any part of the World particularly in Africa." />
      <button className="mt-12 rounded-3xl uppercase bg-[#cf2e2e] text-white cursor-pointer hover:bg-blue-600 py-[10px] px-[20px] tracking-wider text-lg">
        commerce your educational journey here
      </button>
    </div>
  );
}
