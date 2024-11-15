'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Link from "next/link"
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='home' className='bg-slate-900'><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto w-[20rem]"
          alt="Image"
          height={500}
          width={500}
          src={require('../../public/image.jpg')}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
           I am
          <br className="hidden lg:inline-block" />
          <div className='text-cyan-400'>
          <Typewriter 
  options={{
    strings: ['Frontend Developer', 'UI/UX Developer' , 'Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>
          </div>
        </h1>
        <div className='w-[150px] h-[3px] bg-cyan-500'></div>
        <p className="mb-8 leading-relaxed text-white text-[18px] pt-5">

       I'm a Front-End Developer skilled in HTML, CSS, JavaScript, Next.js, and Tailwind CSS, specializing in creating responsive, user-friendly web interfaces with a focus on UI/UX design.
        </p>
        <div className="flex justify-center">
          <Link href={"#contact"}>
          <button className="inline-flex text-white bg-cyan-700 border-10 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded text-lg  border-cyan-500 focus:border-cyan-500 focus:bg-transparent focus:ring-2 focus:ring-cyan-500">
            <h1>Contact</h1>
          </button>
          </Link>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Hero