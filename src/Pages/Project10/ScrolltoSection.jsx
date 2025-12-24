import React, { useRef } from 'react'

function ScrolltoSection() {
    const sec1 = useRef(null);
    const sec2 = useRef(null);
    const sec3 = useRef(null);
    const sec4 = useRef(null);
    const sec5 = useRef(null);
    const sec6 = useRef(null);
    const nav = useRef(null);
    const GoTo = (ref)=>{
        if (!ref?.current){
            return 
        }
        ref.current.scrollIntoView({behavior: "smooth"})
    }

  return (
    <div>
        <div ref={nav} className="nav flex justify-center gap-4">
            <span onClick={()=>GoTo(sec1)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl ' >sec 1 </span>
            <span  onClick={()=>GoTo(sec2)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl '>sec 2 </span>
            <span onClick={()=>GoTo(sec3)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl '>sec 3 </span>
            <span onClick={()=>GoTo(sec4)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl '>sec 4</span>
            <span onClick={()=>GoTo(sec5)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl '>sec 5 </span>
            <span onClick={()=>GoTo(sec6)} className='cursor-pointer border border-white py-2 px-5 mt-5 rounded-xl '>sec 6 </span>
        </div>
        <div ref={sec1} className="allsections w-full text-5xl text-center text-black ">
        <div ref={sec2} className="sec1 w-full h-100  bg-green-300 mt-5 "> section 1   <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer border-2 mt-4 px-3 rounded-xl ml-10'>totop</span> </div>
        <div ref={sec3} className="sec2 w-full h-100 bg-amber-500 mt-5 ">  section 2  <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer ml-10'>totop</span> </div>
        <div ref={sec4} className="sec3 w-full h-100 bg-gray-700 mt-5 "> section 3  <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer ml-10'>totop</span></div>
        <div ref={sec5} className="sec4 w-full h-100 bg-blue-800 mt-5 "> section 4  <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer ml-10'>totop</span></div>
        <div ref={sec5} className="sec5 w-full h-100 bg-purple-700 mt-5 "> section 5  <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer ml-10'>totop</span></div>
        <div ref={sec6} className="sec6 w-full h-100 bg-cyan-500 mt-5 " > section 6  <span onClick={()=> nav.current.scrollIntoView({behavior:"smooth"})} className='cursor-pointer ml-10'>totop</span></div>
        </div>
    </div>
  )
}

export default ScrolltoSection
