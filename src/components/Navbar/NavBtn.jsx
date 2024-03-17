import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 font-bold text-1xl'>
      {props.children}
    </button>
  )
}

export default Button