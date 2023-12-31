import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <section className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quote"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-medium text-[18px] leading-[30px] text-white py-9">
        {content}
      </p>
      <div className="flex ">
        <img src={img} alt="" className="w-[48px] h-[48px]" />
        <div className="flex flex-col ml-5">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins  font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCard;
