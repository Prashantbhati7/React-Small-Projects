import React, { useEffect, useState } from 'react'
import ProductGrid from './ProductGrid';
import { Button } from '../../Components';
function infiniteScroll() {
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(null);
    const [limit,setlimit] = useState(10);

    useEffect(()=>{
        const fetchData = async(limit,skip)=>{
            try{
            console.log("fecthing data from api ")
            const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
            console.log("fetching completed converting to json");
            const resjson = await res.json();
            console.log("converted to json ")
            console.log("data of prod is ",resjson);
            setdata(resjson.products);
            setloading(false);
            return  ;
        }
        catch(error){
            console.log("error in loading data ",error);
            seterror(error);
        }
        }
        fetchData(limit);
    },[limit])
  return (
   <div className='bg-black min-h-screen text-white '>
        { error?<div className='text-red-600'>{error}</div>:
            loading?<div className='text-center text-5xl '>Loading...</div>:
            <div>
            <div className="header  flex items-center justify-between bg-gray-600 h-20">
                <div className="home cursor-not-allowed w-1/2">Home</div>
                <div className="right  flex gap-5 justify-end pr-4 w-1/2">
                <div className="login cursor-no-drop">Login</div>
                <div className="sinpup cursor-no-drop">signUp</div>
                </div>
            </div>
                <div className='grid ml-10  grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                {data?.length > 0 && data.map((data)=> <ProductGrid key={data.id} data={data}/>)}
                </div>
                <div className='flex justify-center mt-5'>
                    <Button disabled={limit>=100?true:false} bgcolor='bg-blue-400' onclicktask={()=> {console.log("limit is ",limit) ; setlimit((prev)=> prev+10) ; console.log("liimt is now ",limit) ; } } > {limit>=100 ? "loaded max" : "loadMore"}</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default infiniteScroll
