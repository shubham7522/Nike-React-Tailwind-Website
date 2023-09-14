import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { motion } from "framer-motion";

const SpecialOffers = () => {
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
      className="flex items-center max-xl:flex-col-reverse gap-10 max-container "
      initial="init"
      whileInView="view"
      transition="trans"
      viewport="view"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg ">
          <span className="text-coral-red "> Special </span> Offer
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
        <div className="mt-11 flex gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
