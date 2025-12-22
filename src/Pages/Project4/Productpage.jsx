import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Rating from './Rating';
import Reviews from './Reviews';
import Tags from './Tags';
function Productpage() {
    const {id} = useParams();
    const [data,setdata] = useState(null);
    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(true);
    console.log(id);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const resjson =  await res.json();
            console.log("data",resjson);
            setdata(resjson);
            setloading(false);
            }catch(error){
                console.log("error in fetching data ",error);
                seterror(error);
            }
        }
        fetchdata();
    },[id])
  return error?<div>Error : {error} </div> : loading?<div>Loading...</div> : 
  <div className='bg-black mt-5 min-h-screen'>
        <div className="back w-full">
            <div  > <Link className='cursor-pointer bg-gray-600 rounded-xl  px-4 py-2' to={'/project4/product'}> Back </Link></div>

        </div>
        <div className="product w-full"> 
                <div className='h-150  flex justify-center'>
                <img src={data.images[0]} alt="" />
                </div>
                <div className="detail m-20  ">
                <div className="title text-3xl font-extrabold">{data.title}</div>
                <div className="brand">Brand : {data.brand || ""}  </div>
                <div className="price font-bold text-2xl"> $ {data.price} <span className='ml-5' >Actual Price </span> <span className=' line-through'>  {(data.price+ data.price/100 * data.discountPercentage).toFixed(2) } </span> </div>
                <div className="desc">{data.description}</div>
                <div className="tags flex gap-4 my-4">
                {data.tags.map((tag)=> <Tags key={tag} title={tag}></Tags>)}
                </div>

                <div className="warranty">Warranty Info : {data.warrantyInformation}</div>


                <Rating R={data.rating}></Rating>

                <div className='mt-5'> Shipped in : {data.shippingInformation} </div>
                <div className="return">Return Ploicy : {data.returnPolicy}</div>
                <div className="mt-2  text-3xl font-bold">Reviews : </div>
                    {data.reviews.map((review,idx)=>{
                        return <Reviews key={idx} name={review.reviewerName} email={review.reviewerEmail} rating={review.rating} date={review.date} comment={review.comment}></Reviews>
                    })}
                </div>
        </div>
  </div>
}

export default Productpage
