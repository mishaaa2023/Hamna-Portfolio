import React from 'react'
import SkillsSection from '../components/sections/SkillsSection'

const HomePage = () => {
  return (
    <>
    <h1 className='text-center text-3xl madimi-one-regular'>My Projects</h1>
     <section className='flex flex-wrap items-center justify-evenly py-5 px-4'>
   
   <div className='flex flex-wrap items-center justify-evenly'>
   <SkillsSection img={'/item6.png'} name={'Beautiful green knitted bag'}desc={'This is an amazing gift for young children...'}price={'34'} />
   <SkillsSection img={'/item5.png'} name={'Beautiful Knitted Doll'}desc={'This is a amazing gift for young children...'}price={'34'}/>
   <SkillsSection img={'/item8.png'} name={'Beautiful Knitted Scarf'}desc={'This is an amazing gift for young children...'}price={'34'}/>
   </div>
   <h1 className='text-gray-500 text-center mt-5 text-[2rem] madimi-one-regular'>More Exciting Projects on the way!</h1>
  </section>
    </>
   
  )
}

export default HomePage