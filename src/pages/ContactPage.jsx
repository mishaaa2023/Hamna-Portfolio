import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col py-7 px-6 items-center w-[100%] gap-4'>
      <h1 className='madimi-one-regular text-3xl mt-6'>Contact me</h1>
      <p className='text-2xl'>Get in touch with me!</p>
       <div className='flex items-center justify-evenly gap-6 mt-7'>
        <img src="download.png" alt="" className='h-[2rem] cursor-pointer'/>
        <img src="download (1).png" alt="" className='h-[2rem] cursor-pointer'/>
        <img src="download (2).png" alt="" className='h-[2rem] cursor-pointer'/>
        <img src="download (3).png" alt="" className='h-[2rem] cursor-pointer'/>

       </div>
       <h1 className='madimi-one-regular text-3xl mt-[7rem] text-gray-600'>Let's Work on your project!</h1>
  
    </div>
  )
}

export default HomePage