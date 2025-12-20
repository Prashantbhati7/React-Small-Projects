import React, { useRef, useState } from 'react'
import {accordionData1,accordionData2} from './dummydata'
import AccordianBox from './AccordianBox'
import MultipleAccordian from './MultipleAccordian';
import { data } from 'react-router-dom';
import BothAccordianBox from './BothAccordianBox';

function Accordian() {
  const [expand,setexpand] = useState(null);

  const [multiexpand,setmultiexpand]= useState(false)
  const [expandlist,setexpandlist] = useState([]);
  return (
    <div className='container text-center w-full' >
          <div>Only One Expandable </div>
          { accordionData1?.length>0 ? accordionData1.map((data)=>(<AccordianBox expand={expand} setexpand={setexpand} key={data._id} data={data}/>)) : <div> No Data Found ... </div> }
          <div>Multiple expandable </div>
          {accordionData2?.length>0?accordionData2.map((data)=>(<MultipleAccordian key={data._id} data={data}/>)) : <></>}
          <div>Both</div>
          <button onClick={()=> setmultiexpand((prev)=> {
            if (prev) setexpandlist([]) 
            return  !prev;
          } ) } className='px-4 py-2  bg-gray-600 rounded-xl '>{multiexpand==false?"enable Multiexpand ": "disable Multiexpand"}</button>
          {accordionData1?.length>0 ? accordionData1.map((data)=><BothAccordianBox enable={multiexpand} setexpandlist={setexpandlist} expandlist={expandlist} data={data} key={data._id} />) : <></>}
    </div>

  )
}

export default Accordian
