import React from "react";
import Button from "./Button";
import styles, { layout } from "../style";
import { features } from "../constants/index";

const Bussiness = () => {
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="" />
      </div>
      <div className="flex-1">
        <div>
          {features.map((item) => (
            <div key={item.id} className="flex flex-row p-6">
              <img src={item.icon} alt="icon" />
              <div className="flex flex-col pl-[2rem]">
                <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                  {item.title}
                </h2>
                <p className={`${styles.paragraph}`}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bussiness;
