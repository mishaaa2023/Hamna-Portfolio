import React from 'react'

const HomePage = () => {
  
  return (
    <>
    <section className="text-gray-600 body-font my-10 h-full">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <img className="object-cover object-center rounded w-full" alt="heroimg" src="/image.webp"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 madimi-one-regular">Hamna Asif Ahmed
        
      </h1>
      <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-orange-500 madimi-one-regular">Product Designer
        
      </h1>
      <p className="mb-8 leading-relaxed">Hi, I am Hamna an artist and  designer.I study in Class 5 and I have a passion for creating products that help people in their daily life. I create both handmade products and digital products.</p>
      <div className="flex justify-center">
          
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default HomePage