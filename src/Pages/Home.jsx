import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-white    text-2xl text-center'>
        <ul className='list-inside '>
            <li className=''> <Link className='text-center transition delay-150 duration-200 ease-in-out text-shadow-sm hover:text-shadow-blue-400 ' to={'/project1'}>Project 1 (Accordian) </Link> </li>
            <li ><Link className='text-center transition delay-150 duration-200 ease-in-out text-shadow-sm hover:text-shadow-blue-400' to={'/project2'}>Project 2 (Start Rating)</Link> </li>
            <li><Link className='text-center transition delay-150 duration-200 ease-in-out text-shadow-sm hover:text-shadow-blue-400' to={'/project3'}>Project 3 (Image Slider)</Link></li>
        </ul>
    </div>
  )
}

export default Home
