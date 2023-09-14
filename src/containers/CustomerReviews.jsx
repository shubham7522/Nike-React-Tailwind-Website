import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  let sectionVariants = {};
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    sectionVariants = {
      init: {
        opacity: 0,
        x: -1000,
      },
      view: {
        opacity: 1,
        x: 0,
      },
      trans: {
        delay: 0.5,
        duration: 0.5,
      },
      port: {
        once: true,
      },
    };
  }
  return (
    <motion.section
      className="max-container"
      initial="init"
      whileInView="view"
      transition="trans"
      viewport="view"
    >
      <h3 className="text-center font-palanquin font-bold text-4xl">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text text-center mt-4 mx-auto max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id
        distinctio culpa nobis, consequatur quia laudantium ipsam eos nemo
        numquam?
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default CustomerReviews;
