
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import NavBarList from './smallComponents/NavBarList';

const Navbar = () => {
  return (
    <>
    <div className='  bg-bgmain z-10  overflow-hidden relative'>
      <Image alt=' s' src={'/techbg.jpg'} className=' absolute h-auto z-[-1] w-full max-md:hidden' height={3000} width={3000}/>
    <div className=' flex justify-between items-center md:bg-bgmain/90 px-3 lg:px-[35px] py-3 text-center'>
        <Link href={'#'} className=''>
            <Image src={'/logo.svg'} alt='dc' className=' h-auto' height={100} width={210}/>
            <p className=' text-xs mt-1 text-gray-200'>Modern Marketing For Technical Industries</p>
        </Link>
    <div className="flex flex-col justify-between h-full py-4">
        <div className="self-end flex items-center max-md:hidden gap-x-3">
         
          <Link href={'#'} className='text-sm text-gray-200'>612.521.4286</Link>   
    
          <div className="relative bg-gray-400 bg-opacity-50 flex items-center  w-40 px-2">
    <input type="text" className="bg-transparent w-32 text-gray-200  placeholder-gray-300 focus:outline-none border-transparent" placeholder="Search..." />
    <Link href={'#'} className=" text-white font-bold">
        <IoSearch />
    </Link>
    </div>
    
          <Link href={'#'} className=' text-white font-bold flex justify-center items-center py-1 rounded-sm transition-all duration-400 px-7 bg-btncolor hover:bg-onHover hover:scale-105'>
            CONTACT
          </Link>
        </div>
        
        <NavBarList/>
        
    </div>
    </div>
  <div className=' w-full h-auto min-h-[60vh] md:bg-bgmain/90 md:h-[60vh] lg:h-[80vh] flex flex-col justify-center px-5 md:px-14 lg:px-20'>
    <p className=' text-white text-2xl md:text-4xl lg:text-5xl font-bold'>B2B Industrial Marketing Agency: Web Design & Digital Marketing for Industry</p>
    <p className=' text-sm md:text-xl text-white/70 font-light my-4'>We're a B2B industrial web design & digital marketing agency helping technical, industrial, life science and manufacturing companies achieve increased visibility & engagement, stronger positioning & branding, higher quality leads, and greater marketing ROI to accelerate growth.</p>
    <div className=' flex mt-4 mb-10 gap-x-5'>
    <Link href={'#'} className=' inline-flex text-white text-xs font-bold  justify-center items-center py-4 rounded-sm transition-all duration-400 px-8 bg-btncolor hover:bg-onHover hover:scale-105'>
            HOW WE CAN HELP
          </Link>
    <Link href={'#'} className=' text-white font-bold text-xs flex justify-center border-2 hover:border-onHover border-white items-center py-1 rounded-sm transition-all duration-400 px-8 bg-transparent hover:bg-onHover hover:scale-105'>
            CASE STUDIES 
          </Link>
    </div>
  </div>
  
  
  
    </div>
    <div className='bg-bgdarkcolor w-full flex justify-center items-center'>
    <Link href={'#'} className=' transition-all duration-300  flex max-sm:text-xs hover:scale-105 text-white py-2 font-[100] w-fit '>Digital Marketing Strategy Quick Start: Improve your marketing today &gt;</Link>
    </div>
    </>
  )
}

export default Navbar