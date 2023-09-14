import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { motion } from "framer-motion";
const SuperQuality = () => {
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
    initial="init"
    whileInView="view"
    transition="trans"
    viewport="view"
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg ">
          We Provide You
          <br />
          <span className="text-coral-red ">Super </span>
          <span className="text-coral-red "> Quality </span> Shoes
        </h1>
        <p className="mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae
          nobis vitae ut a commodi, quos at nam laborum molestias dolores alias
          tenetur blanditiis voluptatem dolorum vero deleniti reiciendis
          accusantium.
        </p>
        <p className="mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="Shoe" width={570} height={522} />
      </div>
    </motion.section>
  );
};

export default SuperQuality;
