import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-white  flex justify-center  text-2xl '>
        <ul className='list-inside mt-10 '>
            <li className='project-list'> <Link  to={'/project1'}>Project 1 (Accordian) </Link> </li>
            <li className='project-list ' ><Link to={'/project2'}>Project 2 (Start Rating)</Link> </li>
            <li className='project-list '><Link  to={'/project3'}>Project 3 (Image Slider)</Link></li>
            <li className='project-list '><Link  to={'/project4/product'}>Project 4 (Mini Ecommerce)</Link></li>
            <li className='project-list '><Link  to={'/project5'}>Project 5 (Tree View )</Link></li>
        </ul>
    </div>
  )
}

export default Home
