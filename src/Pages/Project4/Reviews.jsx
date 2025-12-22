import React from 'react'
import Rating from './Rating'
function Reviews({name,email,comment,rating,date}) {
  return (
    <div className='upper container '>
            <div className="box p-4 outline-2 mt-5 outline-white rounded-xl ">
                <div className="name font-bold text-3xl ">{name}</div>
                <Rating R={rating} ></Rating>
                 <div className="comment">{comment} </div>
                 <div className="italic text-sm">{date.split('T')[0]}</div>
            </div>
    </div>
  )
}

export default Reviews
