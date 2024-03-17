import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({img,name,desc,product,}) => {
  return (
    <>
      <div className='project-card  border-orange-500'>
         <img src={img} alt=""   />
         <h2 className='text-orange-500'>{name}</h2>
         
         <p className='text-orange-500'>{desc}</p>
         
         <div className="button-container">
          <a href={product}><button className='bg-orange-500'>Buy Product</button></a>
         
         
    
         </div>
      {/* <article className={`Card ${classname}`}>
        {children}
    </article> */}
    </div>
    </>
  )
}

export default ProjectCard