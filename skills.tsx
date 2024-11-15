import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id='skills'><section className="text-gray-600 body-font bg-slate-800">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-white tracking-widest font-bold title-font mb-1">
          Skills
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-400">
          My Skills
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
         {/* skills */}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-orange-400 flex-shrink-0">
              <ImHtmlFive className='text-xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                HTML
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[90%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>90%</p>
                </div>
                
                
            </div>
          </div>
        </div>
         {/* skills */}
         <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-blue-600 flex-shrink-0">
              <FaCss3Alt className='text-2xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                CSS
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[80%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>80%</p>
                </div>
            </div>
          </div>
        </div>
         {/* skills */}
         <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-yellow-400 flex-shrink-0">
              <TbBrandJavascript className='text-2xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                Javascript
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[85%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>85%</p>
                </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-blue-500 flex-shrink-0">
              <SiTypescript className='text-xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                Typescript
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[85%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>85%</p>
                </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-900 flex-shrink-0">
              <TbBrandNextjs className='text-3xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                Next.Js
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[95%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>95%</p>
                </div>
            </div>
          </div>
        </div>
          {/* skills */}
          <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-transparent p-8 flex-col">
            <div className="flex items-center mb-3 ">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-cyan-500 flex-shrink-0">
              <RiTailwindCssFill className='text-3xl font-bold' />
              </div>
              <h2 className="text-white font-bold text-lg title-font">
                Tailwind CSS
              </h2>
            </div>
            <div className="flex-grow">
            <div className=' relative h-1 w-full bg-white relative rounded xl'>
                  <div className='absolute h-1 w-[80%] bg-cyan-400 rounded xl'>
                  </div>
                  <p className='text-right text-cyan-400 font-bold mt-3'>80%</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Skills