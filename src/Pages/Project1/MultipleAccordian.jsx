import React from 'react'
import { useState } from 'react';
function MultipleAccordian({data}) {
    const [expand,setexpand] = useState(false);
  return (
   <div className="box max-w-5xl mx-auto my-4 bg-pink-300 rounded-2xl  p-4">
    <div className="title flex justify-between ">
        <span>{data.ques}</span> <span onClick={()=>(setexpand((prev)=> (!prev) ))} className='cursor-pointer transition delay-75 duration-300 ease-in-out hover:scale-150'>{expand?"-":"+"}</span>
    </div>
    { expand && <div className="ans ">{data.ans}</div>}
   </div>
  )
 
}

export default MultipleAccordian
