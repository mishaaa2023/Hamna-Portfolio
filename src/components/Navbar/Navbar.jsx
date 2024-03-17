import React, { useState } from 'react'
import NavBtn from './NavBtn';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT",link:"/about"},
      {name:"PROJECTS",link:"/projects"},
      {name:"CONTACT",link:"/contact"},
      
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 '>
      <div className='font-bold text-2xl cursor-pointer flex items-center  
      text-orange-500 font-serif madimi-one-regular'>
       
       Hamna's Portfolio
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-orange-500'>
      <ion-icon name={open ? 'close':'menu'} className="text-orange-500"></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12  bg-black absolute md:static text-orange-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-orange-500  '>
              <a href={link.link} className=' hover:text-gray-400 duration-500 text-orange-500' >{link.name}</a>
            </li>
          ))
        }
       
      </ul>
      </div>
    </div>
  )
}

export default Navbar