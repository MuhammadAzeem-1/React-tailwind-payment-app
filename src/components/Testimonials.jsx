import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} 
       flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex items-center justify-around md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div>
          <p className={`${styles.paragraph} w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
