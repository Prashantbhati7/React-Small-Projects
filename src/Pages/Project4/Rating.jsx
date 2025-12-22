import React from 'react'

import { FaStar } from 'react-icons/fa';
function Rating({R}) {
    
    const arr = [1,2,3,4,5];
    return (
        <div className='flex gap-1 mt-3 '>
        {arr.map((r)=>{
            return  r<= R ? <FaStar key={r} className='text-yellow-500'/>:<FaStar></FaStar>
        })}
        <span>Rating:({R})</span>
        </div>
    )
  
}

export default Rating
