import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import {statistics,shoes} from '../constants';
import { bigShoe1 } from "../assets/images";
import ShowCard from '../components/ShowCard';
import { motion } from "framer-motion";

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col p-2 justify-start min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quibusdam harum inventore ea!
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) =>(
            <motion.div initial={{scale:0}} animate={{scale :1}} transition={{delay:0.25}} key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
        <img src={bigShoeImage} width={610} height={500} alt="Shoe Collection 1" className=" object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[15%] max-sm:py-6">
            {
              shoes.map((shoe) =>(
                <div>
                  <ShowCard imageURL ={shoe} changeBigShoeImage={(shoe)=>{setBigShoeImage(shoe)}} bigShoeImage ={bigShoeImage} />
                </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default Hero;
