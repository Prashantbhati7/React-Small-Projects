import React, { useEffect, useState } from 'react'

function ScrollIndicator() {
    const url = 'https://dummyjson.com/quotes?limit=100';
    const [data,setdata] = useState(null)
    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(true);
    const [scrollPercentage,setscrollPercentage] = useState(0);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                
                const res = await fetch(url);
                
                const resjson = await res.json();
                
                setdata(resjson.quotes);
                console.log("data is ",resjson.quotes);
                setloading(false);

            }catch(error){
               
                seterror(error);
            }
        }
        fetchdata();
    },[])
    function handlescrollPercentage(){
        const scrollDone =  document.documentElement.scrollTop
        const totalHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(scrollDone/totalHeight*100)
        setscrollPercentage(scrollDone/totalHeight*100);
    }
    useEffect(()=>{
            window.addEventListener('scroll',handlescrollPercentage)

            return ()=> window.removeEventListener('scroll',()=>{});
    },[])
  return error ? <div className='text-center text-white text-5xl '> Error :  {error} </div> : loading ? <div className='text-center text-white text-5xl'> Loading...  </div> 
  : <div className='min-h-screen bg-black text-white'>
    <div className='w-full bg-amber-800 text-2xl text-center '>Scroll Indicator</div>
    <div className={`h-5 sticky top-0 flex`}>
        <div className={`bg-green-400 h-5 sticky top-0 text-center w-[${scrollPercentage}vw] text-black`}  style={{width:`${scrollPercentage}vw`}}> {scrollPercentage.toFixed(2)}% </div>
    </div>

        {data.map((q)=> <div className='text-center py-5' key={q.id}> {q.quote} </div>)}
  </div>
}

export default ScrollIndicator
