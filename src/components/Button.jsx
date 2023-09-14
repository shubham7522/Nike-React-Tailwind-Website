import React from "react";
import { motion } from "framer-motion";

const Button = ({ label, iconURL,backgroundColor,textColor,borderColor,fullWidth }) => {
  return (
    <motion.button
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{delay :0.15}}
      whileHover={{boxShadow :"0px 0px 15px rgb(255,101,33)",scale:1.1}}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="iconURL"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </motion.button>
  );
};

export default Button;
