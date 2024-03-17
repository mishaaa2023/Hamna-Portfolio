import React from 'react'

const AboutBox = ({data,text}) => {
  return (
    <>
    <div className='flex flex-col border-orange-500 py-4 px-3 mb-6'>
      <div className='text-orange-500 text-3xl border-orange-500 mb-6'>
        <p>{data}</p>
        <p>{text}</p>
      </div>
      
    </div>
    </>
  )
}

export default AboutBox