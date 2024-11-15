import react from "react"
import Link from "next/link"
import { MdOutlineCloudDownload } from 'react-icons/md';



const Navbar = () => {
    return(
        <div className="bg-slate-800 z-50 sticky top-0">
            <header className="text-white body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <span className="ml-3 text-[35px] text-white">Aqsa. </span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-[20px]">
      <Link href={"#home"} className=" text-cyan-400 mr-5 hover:text-cyan-400">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-cyan-400">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-cyan-400">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-cyan-400">Project</Link>
      <Link href={"#contact"} className="mr-5 hover:text-cyan-400">Contact</Link>
      
    </nav>
      <a href="/CV.docx">
    <button className="inline-flex items-center bg-cyan-700 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 rounded text-base mt-4 md:mt-0 text-[20px] font-bold">
      
      Download CV
      
     <MdOutlineCloudDownload  className="text-l ml-1"/>
    </button>
     </a>
  </div>
</header>

        </div>
    )
}

export default Navbar
