import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Whoweserve = () => {
    const list=[
        { data:'Complex products & services'},
        { data:'Niche audiences'},
        { data:'Multiple personas / ABM'},
        { data:'Long sales cycles'},
        { data:'Transitioning from traditional selling to internet marketing'},
        { data:'Global reach & supply chain, GDPR'},
        { data:'CRM, ERP, MAT integrations'},
        ]
  return (
    <div className='relative overflow-hidden h-auto w-full'>
   
    <Image alt="" src={'/warehouse.jpeg'} height={10000} width={10000} className=" w-full h-full top-0 left-0 max-md:hidden absolute"/>        
    <div className='relative flex flex-col max-md:bg-bgmain md:bg-bgmain/90 gap-y-2 z-10 max-md:py-10 p-5 lg:p-20'>
    <h1 className=" text-sm md:text-xl font-bold   text-gray-100">WHO WE SERVE</h1>
    <h2 className=" text-xl  md:text-2xl lg:text-3xl leading-5 py-2  lg:py-4 text-white font-bold">Industrial web design, website development and marketing for B2B, technical, industrial, & manufacturing companies</h2>
    <p className="  text-sm md:text-base  max-md:leading-5 md:line-clamp-4 leading-loose md:w-11/12 text-gray-200">Complex offerings? Complicated messaging? Nuanced integrations or other critical technical needs? Our custom industrial web design services and processes are built to manage these realities. Since 2006, we’ve helped B2B industrial and manufacturing marketers accelerate growth through powerful websites and digital marketing. Our clients share certain characteristics that demand a specialized approach:</p>
    <div className="w-full grid pt-1 grid-cols-2 leading-4  md:grid-cols-3 gap-4">
  {list.map((data, index) => (
    <div  key={index} className="flex justify-start">
      <span className=" text-btncolor  mx-2">&#8226;</span><span className="hover:underline text-white  pointer-events-none transition-all duration-300">{data.data}</span>
    </div>
  ))}
</div>
<Link href={'#'} className=' w-fit text-white font-bold text-xs flex justify-center border-2 border-white items-center py-3 mt-4 rounded-sm transition-all duration-500 px-8 bg-transparent hover:bg-white hover:text-btncolor hover:scale-105'>
            MORE ABOUT YOU
          </Link>
    </div>
    </div>
  )
}

export default Whoweserve