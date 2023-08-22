import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets/index";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={`${layout.section} items-center`}>
      <div>
        <h2 className={`${styles.heading2}`}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 mb-3`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <Button />
      </div>{" "}
      <div>
        <img
          src={card}
          alt="dfdsaf"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
