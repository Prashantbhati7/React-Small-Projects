import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-white    text-2xl text-center'>
        <ul>
            <li className='list-outside'> <Link className='text-center transition delay-150 duration-200 ease-in-out text-shadow-sm hover:text-shadow-blue-400 ' to={'/project1'}>Project 1 (Accordian) </Link> </li>
        </ul>
    </div>
  )
}

export default Home
