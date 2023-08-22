import React from "react";
import { bill, apple, google } from "../assets/index";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <>
      <section className={layout.sectionReverse} id="product">
        <div>
          <img
            src={bill}
            alt="dfdsaf"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
        <div>
          <h2 className={`${styles.heading2}`}>
            Easily control your billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex flex-wrap sm-mt-10 mt-10 ">
            <img
              src={apple}
              alt="apple"
              className="w-[128.8px] h-[42.02px] cursor-pointer "
            />
            <img
              src={google}
              alt="apple"
              className="w-[144.17px] h-[42.02px] cursor-pointer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
