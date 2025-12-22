import React, { useState } from 'react'
import Parent from './Parent'

function View({children}) {
    const [expand,setexpand] = useState(false);

  return (
    
    <div className=' mt-3 '>
        
       {/* <div className="title flex justify-between px-20"><span>{obj.label}</span>
            { obj.children.length > 0 &&  <button onClick={()=> setexpand((prev)=> !prev)} className='transition cursor-pointer delay-75 duration-300 ease-in-out hover:scale-125 active:scale-50'> {expand ? "-" : "+"}</button>} 
        </div>
       {expand && <> <hr></hr> <Parent data={obj.children}></Parent> </>} */}
       <Parent  data={children}> </Parent>
    </div>
  )
}

export default View
