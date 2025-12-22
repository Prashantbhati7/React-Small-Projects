import React, { useState } from 'react'
import View from './View'
function Parent({data}) {
    const [expand,setexpand] = useState([]);
    const handlexpand = (idx)=>{
        setexpand((prev)=>{
            if (prev.indexOf(idx)==-1){
                return [...prev,idx];
            }
            else {
                const newex = prev.filter((ele)=>(ele!=idx));
                return newex;
            }
        })
    }
  return (
    <ul className='text-2xl'>
       {/* {data.map((d,idx)=> <li key={idx} className=' pl-8'> <View obj={d} ></View> </li> )} */}
       { data.map((d,idx)=> <li className='pl-5'> <div className='flex justify-between'> <span>{ d.label } </span> 
       { d.children.length>0 && <button className='transition delay-75 duration-300 ease-in-out hover:scale-150' onClick={()=> handlexpand(idx)} >
         {expand.indexOf(idx)==-1 ? "+" : "-"} </button>}  </div> 
                                        {expand.indexOf(idx)!=-1 && <View children={d.children}></View>} </li> ) }
    </ul>
  ) 
}

export default Parent
