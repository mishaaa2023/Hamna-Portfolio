import React from 'react'
import { FaDownload } from "react-icons/fa6";

const RightSection = () => {
  return (
    <section className=" body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="image12.png"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium madimi-one-regular">Hi,I'm Hamna a designer
          <br className="hidden lg:inline-block"/>Based in Pakistan
        </h1>
        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white items-center bg-[#ad72ed] border-0 py-2 px-6 focus:outline-none hover:bg-[#ad72ed] rounded text-lg">
            Download CV <FaDownload className='ml-4'/>
            </button>
          </div>
      </div>
    </div>
  </section>
  )
}

export default RightSection