import React from 'react';
import { star } from '../assets/icons';
import {motion} from 'framer-motion'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <motion.img src={imgURL} alt={name} className='w-[280px] h-[280px] rounded-lg cursor-pointer ' whileHover={{boxShadow :"0px 0px 15px rgb(255,101,33)",scale:1.1,borderRadius:"500px"}}/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="icon" width={24} height={24} />
            <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
        </div>
            <h3 className='mt-3 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 font-montserrat font-semibold leading-normal text-coral-red'>{price}</p>
    </div>
  )
}

export default PopularProductCard;