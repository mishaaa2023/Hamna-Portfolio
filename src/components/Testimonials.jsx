import React from 'react'

const Testimonials = () => {
  return (
    <section className=" body-font">
      <h1 className='madimi-one-regular text-center text-3xl '>Testimonials</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="review.jpg"/>
          <p className="leading-relaxed">Hamna is an amazing designer.She took full interest in the project and completed it on time.She designed my logo and it looked just amazing! I highly suggest Hamna to anyone who wants quality work on time. Her communication skills are also amazing!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">DANIA ANWER</h2>
          <p className="">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="review3.webp"/>
          <p className="leading-relaxed">Hamna is really talented and the way she approached my project was amazing! I believe that with continued practice she can excel in this field and do better.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">ALI ASAD</h2>
          <p className="">WEB Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="review2.webp"/>
          <p className="leading-relaxed">Hamna has done many projects for me and she did it on time. She has excellent communication skills and gave high attention to the project!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">SARA KHALID</h2>
          <p className="">WEB DEVELOPER</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials