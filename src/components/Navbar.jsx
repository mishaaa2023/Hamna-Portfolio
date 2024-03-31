import React from 'react'
import { FaDownload } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
     <div className="flex flex-col py-9 md:flex-row  items-center justify-evenly md:py-5 px-3">
        <div>
            <a href='/'className='madimi-one-regular'>Hamna's Portfolio</a>
            </div>
        <ul className='flex  items-center gap-4 py-6 text-[13.5px] '>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About me</a></li>
            <a href='/contact'>Contact me</a>
            <a href='/projects'>Projects</a>
        </ul>
        <div className='flex'>
          <a download>
           <button className='flex items-center gap-4 bg-[#ad72ed] text-white rounded py-2 px-2'>
            Download my CV <FaDownload />
           </button>
          </a>
        </div>
     </div>
    </>
  )
}

export default HomePage