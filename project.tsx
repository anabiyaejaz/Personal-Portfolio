import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Project = () => {
  return (
    <div id='project'><section className="text-gray-600 body-font bg-slate-900">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-100">
            <span className='text-[35px]'>My</span> <span className='text-cyan-400 text-italic text-[35px]'>Projects</span> </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/student-managment-system.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Student Managment System Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Student Managment System
              </h1>
              <p className="leading-relaxed">
              Built a TypeScript app for managing student records.              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/Student_Management_System.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/ATM-Machine.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                ATM Machine Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                ATM Machine
              </h1>
              <p className="leading-relaxed">
              Built a TypeScript ATM simulation for basic transactions.              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/ATM.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/todo-list.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                TO-DO List Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                To-Do List
              </h1>
              <p className="leading-relaxed">
              Implemented a TypeScript application for tracking tasks.              
              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/To_Do_List.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/word-counter.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Word Counter Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Word Counter
              </h1>
              <p className="leading-relaxed">
              Developed a TypeScript tool to count words in text input.
              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/Word_Counter.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
          
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/cli-game.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                CLI Number Guessing Game Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                CLI Game
              </h1>
              <p className="leading-relaxed">
              Developed a TypeScript command-line game with interactive gameplay.              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/Cli_Number_Guessing.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../public/Calculator.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Calculator Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Calculator
              </h1>
              <p className="leading-relaxed">
              Built a TypeScript-based command-line calculator for basic arithmetic operations.
              </p>
              <Link target='blank' href={'https://github.com/aqsaejaz001/Simple_Calculator.git'}>
              <p className="leading-relaxed text-indigo-500 hover:underline text-bold">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Project