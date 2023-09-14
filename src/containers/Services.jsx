import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
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
      className="max-container flex justify-center flex-wrap gap-9"
      initial="init"
      whileInView="view"
      transition="trans"
      viewport="view"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
