import React from 'react'
import RightSection from '../components/sections/RightSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'

const HomePage = () => {
  return (
   <>
   <RightSection/>
   <section className='flex flex-wrap items-center justify-evenly py-5 px-4'>
    <h1 className='madimi-one-regular text-[23px] mt-5'>My Popular Products</h1>
    <div className='flex flex-wrap items-center justify-evenly'>
    <SkillsSection img={'/item1.png'} name={'CUTE CROCHET DOLL'}desc={'This is an amazing gift for young children...'}price={'34'} />
    <SkillsSection img={'/item4.png'} name={'CUTE CROCHET CHRISTMAS ITEMS'}desc={'This is a amazing gift for young children...'}price={'34'}/>
    <SkillsSection img={'/item5.png'} name={'CUTE CROCHET DOLL'}desc={'This is an amazing gift for young children...'}price={'34'}/>
    </div>
   </section>
   
   </>
  )
}

export default HomePage