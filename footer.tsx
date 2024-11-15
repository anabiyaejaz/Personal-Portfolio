import React from 'react'
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return(
        <div className='bg-slate-800'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">
    
      <span className="ml-3 text-xl">Aqsa Portfolio</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Aqsa Portfolio
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank'
      href={'https://www.linkedin.com/in/aqsa-ejaz-6407072ba'}>
       <FaLinkedin className='text-3xl hover:text-blue-600 mx-2'/>
      </Link>
     
       <Link 
       target='blank'
       href={'https://www.instagram.com/aqsa_ejaz01?igsh=MWZvYzlzZjJudTR0OA=='}>
        <FaInstagram className='text-3xl hover:text-pink-600 mx-2' />
       </Link>

       <Link
       target='blank'
       href={'https://github.com/aqsaejaz001'}>
       <FaGithub className='text-3xl hover:text-gray-400 mx-2' />
       </Link>
      
    </span>
  </div>
</footer>


        </div>
    )
}

export default Footer