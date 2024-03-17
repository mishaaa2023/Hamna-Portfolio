import React from 'react'

const ContactPage = () => {
  return (
    <>
    
    <section className='py-4 px-4 mt-[9rem]'>
      <h1 className='text-center madimi-one-regular text-orange-500 text-3xl '>Contact me at</h1>
        <div className='mt-6 flex-col md:flex items-center gap-4 bg-orange-500 text-black font-bold h-[15rem] md:h-[22rem]'>
          <div className='flex flex-col items-center py-4 px-3  my-auto '>
            <p className='mb-4'><a href='#'>hamnaportfolio2024@gmail.com</a></p>
            <p className='mb-4'><a href='#'>[My Phone Number]</a></p>
            <p className='mb-4'><a href='#'>[Myfacebookprofile]</a></p>
            <p className='mb-4'><a href='#'>[MyYoutubeChannel]</a></p>
            <p className='mb-4'><a href='#'>[MyLinkdenProfile]</a></p>
          </div>
        </div>
    </section>
    </>
    
  )
}

export default ContactPage