import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
function StarRating() {
    const [rating,setrating] = useState(0);
    const [hover,sethover] = useState(0);
   let array = [];
   for (let i = 0 ;i < 5; i++) array.push(i);
   const handleclick = (id)=>{
     setrating(id);
   }
   const handleMouseEnter = (id)=>{
    sethover(id);
   }
   const handleMouseLeave = (id)=>{
    sethover(rating);
   }
  return (
    <div className=' flex gap-5  items-center bg-black justify-center'>
       {array.map((id)=>{
            return(<FaStar  onClick={()=>{handleclick(id)}} onMouseEnter={()=>{handleMouseEnter(id)}} onMouseLeave={()=>{handleMouseLeave(id)}}  key={id} className={`h-100 w-50 ${id<=(hover||rating) ? "text-amber-200" :"text-gray-700"} `}/>)
       })}
    </div>
  )
}

export default StarRating
