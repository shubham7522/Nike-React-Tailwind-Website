import React from 'react';
import { motion } from 'framer-motion';

const ShowCard = ({imageURL,changeBigShoeImage,bigShoeImage}) => {
  const handleClick =() =>{
    if(bigShoeImage !== imageURL.bigShoe){
      changeBigShoeImage(imageURL.bigShoe)
    }

  }

  return (
    <motion.div className={`border-2 rounded-xl ${bigShoeImage === imageURL.bigShoe ? 'border-coral-red'
    :'border-transparent'} cursor-pointer max-sm:flex-1`} whileHover={{boxShadow :"0px 0px 15px rgb(255,101,33)",scale:1.1}} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:flex-1' >
        <img src={imageURL.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
      </div>
    </motion.div>
  )
}

export default ShowCard