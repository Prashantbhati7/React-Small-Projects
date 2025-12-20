import React from 'react'

function BothAccordianBox({enable,setexpandlist,expandlist,data}) {
    const handleclick = ()=>{
        if (enable){
            setexpandlist((prev)=>{
                if ( prev.some((id)=>(id==data._id)) ) {     // already in expandlist 
                    return prev.filter((id)=> (id!=data._id)) ;
                }
                else {
                    return [...prev,data._id];
                }
            })
        }
        else {
            setexpandlist((prev)=> (prev[0]==data._id) ? [] : [data._id] );
        }
    }
  return (
   <div className="box max-w-5xl mx-auto my-4 bg-gray-500 rounded-2xl  p-4">
    <div className="title flex justify-between ">
        <span>{data.ques}</span> <span onClick={handleclick} className='cursor-pointer transition delay-75 duration-300 ease-in-out hover:scale-150'> {expandlist.some((id)=>(id==data._id)) ? "-":"+"} </span>
    </div>
        {(expandlist.some((id)=>(id==data._id))) && <div className="ans">{data.ans}</div>}
   </div>
  )
}

export default BothAccordianBox
