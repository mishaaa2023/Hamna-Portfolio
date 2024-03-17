import React from 'react'
import AboutBox from '../../components/AboutBoxes/AboutBox'

const AboutPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font my-10">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
     <img className="object-cover object-center rounded w-full" alt="heroimg" src="/image2.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 madimi-one-regular">About me
        
      </h1>
      <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-orange-500 madimi-one-regular">
        
      </h1>
      <p className="mb-8 leading-relaxed">I'm Hamna a Product Designer and Artist based in Pakistan. I create amazing design and I have helped many clients by not only creating digital designs for them but also by creating products for them.I create beautiful and realistic paintings,crutiaed items and many other designs.Lets talk about the project!</p>
      <div className="flex justify-center">
          
      </div>
    </div>
  </div>
</section>
<section className='flex-col md:flex items-center gap-3 'style={{padding:'3rem'}}>
  <div style={{border:'2px solid #eb3609'}}className='py-6 px-6 mb-3'>
  <AboutBox data={'2+'} text={'Years of Experience'} className=" border-orange-500"/>
  </div>
  <div style={{border:'2px solid #eb3609',marginBottom:"3rem"}}classNameName='py-6 px-6 '>
  <AboutBox data={'5+'} text={'Happy clients'} className=" border-orange-500"/>
  </div>
  <div style={{border:'2px solid #eb3609'}}classNameName='py-6 px-6 '>
  <AboutBox data={'5+'} text={'Successful Projects'} className=" border-orange-500"/>
  </div>
   
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-orange-500 madimi-one-regular mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full  p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-orange-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-orange-500">Hamna is an amazing designer and has delivered quality work on time.She created an amazing website design for me and she really cares about the satisfaction of her clients.Her communication skills are also amazing.I would highly reccommend her to someone who wants quality work on time.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="/img.webp" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-orange-500">Mysha Fatima</span>
              <span className="text-orange-500 text-sm">WEB DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full  p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-orange-500 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6 text-orange-500">Hamna is an amzing Designer.As a designer myself I know how to make designs and I am amzed by Hamna's Designs. She has a passion for creating amazing products and with continued practice she can become even more better in this field . I wish you all the best Hamna!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="/img2.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-orange-500">Minah Zara</span>
              <span className="text-orange-500 text-sm">UI/UX DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutPage