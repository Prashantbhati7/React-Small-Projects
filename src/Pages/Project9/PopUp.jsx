import React, { useState } from 'react'
import Model from './Model';

function PopUp() {
    const [showpopUp,setshowpopUp] = useState(false);
  return (
    <div className='min-h-screen bg-black text-white '>
        <div className="popbutton flex justify-center my-5"> <button className='cursor-pointer px-5 py-3 bg-gray-600 rounded-xl ' onClick={()=> setshowpopUp((prev)=> !prev)}> {showpopUp ? "hide " : "show "} </button></div>
         <div className="backkconten text-center my-50 py-10  text-8xl ">
                backgoud content 
                { showpopUp && <div className='w-full flex justify-center'> <Model id={1} heading={"Alert"} content={"your system is hacked "}  tocross={()=> setshowpopUp(false)} footer={"Hacked by : Anonymous "} ></Model> </div>}
         </div>
    </div>
  )
}

export default PopUp
