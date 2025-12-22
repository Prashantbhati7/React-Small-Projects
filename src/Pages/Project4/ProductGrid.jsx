import React from 'react'
import { Link } from 'react-router-dom';

function ProductGrid({data}) {
   // console.log("data recirved is ",data);
  return (
    <Link to={`${data.id}`}> <div className='bg-white text-black  w-100 mt-16 h-100 rounded-xl outline-black'>
        <img className='mx-auto' src={data.thumbnail} alt="" />
        <div className='px-2 font-bold flex justify-between'>
          <span>{data.title}</span> <span> $ {data.price}</span> </div>
          <div className='font-semibold px-3'>Brand:- {data.brand}</div>
          <div className="disc px-1 line-clamp-2">{data.description}</div>
    </div>
    </Link>
  )
}

export default ProductGrid
