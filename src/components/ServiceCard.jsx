import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16" whileHover={{boxShadow :"0px 0px 15px rgb(255,101,33)",scale:1.05}}>
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal ">{label}</h3>
      <p className="mt-3 break-words text-lg font-montserrat">{subtext}</p>
    </motion.div>
  );
};

export default ServiceCard;
