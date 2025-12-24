import React from 'react'

function Model({id,heading,content,footer,tocross}) {
   
  return (
    <div className='text-2xl rounded-xl absolute w-120 h-50  top-[40vh] px-5 py-2  text-black bg-blue-600 '>
       <div className="cross flex  justify-end"> <button  className='cursor-pointer' onClick={()=> tocross() } > ⤬  </button> </div>
       <div className="header py-2 text-center text-3xl "> {heading || "this is heading " } </div>
       <div className='content py-2 bg-violet-500 text-center '>{content || "this is content zone "}  </div>
       <div className="footer p-2"> {footer || "this is footer "} </div>
    </div>
  )
}

export default Model
