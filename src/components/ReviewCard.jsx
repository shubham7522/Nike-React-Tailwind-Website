import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({customerName,imgURL,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer" className='rounded-full w-[120px] h-[120px] object-cover' />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gpa-2.5'>
            <img src={star} alt="star" width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard