import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex flex-row flex-wrap justify-around sm:mb-20 mb-6">
      {stats.map((items) => (
        <div
          key={items.id}
          className="flex flex-row justify-between items-center m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] text-white  text-6xl">
            {items.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient  pl-[2rem] uppercase">
            {items.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
