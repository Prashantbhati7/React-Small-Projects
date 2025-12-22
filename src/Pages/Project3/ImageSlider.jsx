import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill,BsArrowRightCircleFill ,BsCircleFill} from 'react-icons/bs';
function ImageSlider() {
    const [rawdata,setrawdata] = useState([]);
    const [loading , setloading] = useState(true);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [err,seterr] = useState(null);
    useEffect(()=>{

        const fetchfromapi = async(url,limit)=>{
            if (!url){
                seterr("No url found ");
            }
            try{
                const data = await fetch(url+limit);
                const jsondata = await data.json();
                console.log(jsondata);
                setrawdata(jsondata);
                setloading(false);
            }catch(error){
                console.log("Error : ",error);
                seterr(error);
            }
        }
        fetchfromapi("https://picsum.photos/v2/list?page=1&limit=",10)
       
    },[])
  return (
    err?<div className='bg-black text-red-500  text-5xl text-center'>{err}</div>:loading?<div className='bg-black text-white text-5xl text-center'>Loading Please wait .... </div>:<>
    <div className=' bg-black flex justify-center items-center gap-10  flex-nowrap'>
        <BsArrowLeftCircleFill onClick={(e)=>setCurrentSlide((prev)=>( (prev==0) ? rawdata.length-1 : prev-1) )}/>
        {rawdata.map((data)=> data.id==currentSlide ? <div className='shrink-0' key={data.id}>  <img className={`rounded-2xl h-100 w-100 shrink-0`} src={`${data.download_url}`} /> <div>{data.author}</div> </div> : null)}
        <BsArrowRightCircleFill onClick={(e)=> setCurrentSlide((prev)=> (prev==rawdata.length-1 ? 0 : prev+1 ))}/>
    </div>
        <div className='flex relative -top-11 gap-1  justify-center items-center'>
            {rawdata.map((data)=><BsCircleFill className={`${currentSlide!=data.id ? "text-gray-600":""}`}  onClick={(e)=>{setCurrentSlide(data.id)}} > </BsCircleFill>)}
        </div>
    </>
  )
}

export default ImageSlider
