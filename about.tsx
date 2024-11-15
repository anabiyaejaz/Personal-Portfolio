import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about'><section className="text-white body-font bg-slate-800 text-[17px]">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
         <span className='text-cyan-400 text-[3rem]'>About</span> <span className='text-white text-[3rem]'>Me</span>
          <br className="hidden lg:inline-block" />
          
        </h1>
        <p className="mb-5 leading-relaxed">
        As a frontend developer with a strong background in building dynamic and responsive web applications, I bring extensive experience in leveraging Next.js, Tailwind CSS and Typescript to create seamless and performant user interfaces. My expertise includes developing sealable web solutions, implementing modern design principle and optimizing user experiences
        </p>
        <div className="flex justify-center">
        <a href="/CV.docx">
          <button className="inline-flex text-white bg-cyan-700 border-10 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded text-lg  border-cyan-500 focus:border-cyan-500 focus:bg-transparent focus:ring-2 focus:ring-cyan-500">
            View CV
          </button>
          </a>
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
          className="object-cover object-center rounded"
          alt="Image"
          width={250}
          height={250}
          src={require('../../public/Image-2.jpg')}
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default About