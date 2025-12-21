import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-[#1581BF]  text-white text-center h-16'>
      <div className="flex ">
            <div className="left justify-start ml-3 flex w-1/2">
          <Link  to={'/'}>Home</Link>
          </div>
          <div className="right flex justify-end-safe w-1/2">
              About Projects 
          </div>
       </div>
    </div>
  )
}

export default Navbar
