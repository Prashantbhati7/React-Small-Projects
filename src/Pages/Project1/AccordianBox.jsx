import React, { useState } from 'react'

function AccordianBox({data,expand,setexpand}) {
    //const [expand,setexpand] = useState(false);
  return (
   <div className="box max-w-5xl mx-auto my-4 bg-gray-500  rounded-xl  p-4">
    <div className="title flex justify-between ">
        <span>{data.ques}</span> <span onClick={()=>(setexpand((prev)=> (prev==data._id ? null : data._id) ))} className='cursor-pointer transition delay-75 duration-300 ease-in-out hover:scale-150'>{expand==data._id ? "-" :"+"}</span>
    </div>
    { expand==data._id && <div className="ans ">{data.ans}</div>}
   </div>
  )
}

export default AccordianBox
