import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { motion } from "framer-motion";

const PopularProducts = () => {
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
      id="products"
      className="max-container max-sm:mt-12"
      initial="init"
      whileInView="view"
      transition="trans"
      viewport="view"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          tempora? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quod, ea?
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </motion.section>
  );
};

export default PopularProducts;
