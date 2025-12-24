import React, { useState } from 'react'
import tabdata from './tabdata'
function Tabs() {
  const [currenttab,setcurrenttab] = useState(0);
  
  return (

    <div className='min-h-screen bg-black  text-white w-full '>
      <div className="tab flex justify-center w-full gap-4 my-5">
       {tabdata.map((tab,idx)=>(<div key={idx}> <span onClick={()=>setcurrenttab(idx)} className={`text-2xl px-4 py-2 cursor-pointer border-2 border-white ${idx==currenttab && "text-gray-600 rounded-xl border-red-800 shadow-xl shadow-blue-700"} `} >{tab.label}</span>  </div>))}
       </div>
       <div className="content py-5 my-5 text-white text-center text-5xl">
        {tabdata.map((tab,idx)=>(idx==currenttab && (<div key={idx}>{tab.content}</div>)))}
       </div>
    </div>
  )
}

export default Tabs
