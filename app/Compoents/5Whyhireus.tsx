import Link from 'next/link';
import React from 'react'
import { BsGraphUpArrow, BsTools } from "react-icons/bs";
import { SlMagnet } from "react-icons/sl";
import { TbTargetArrow } from "react-icons/tb";

const Whyhireus = () => {
    const items = [
        {icon: TbTargetArrow,
            title: "Establish Leadership",
            description: "To outperform competitors and attract talent, your website should stake out a clear, credible position and show that it is a forward-looking industry leader.",
            broder:'lg:border-gray-600/90'
          },
          
        {icon: SlMagnet,
            title: "Showcase & Engage",
            description: "Offer an impressive, rich experience that helps technical audiences find information and solutions quickly. Educate, inform, and inspire your ideal customers.",
            broder:'lg:border-gray-600/90'
          },
        {icon: BsGraphUpArrow,
          title: "Generate Leads",
          description: "Layer in brand strategy and leverage brand perception. Fine-tune the website to attract quality leads, and connect to the CRM and MAT for marketing and sales nurturing.",
          broder:'lg:border-gray-600/90'            
        },
        
        { icon: BsTools,
          title: "Use Better Tools",
          description: "Better tools mean better load times, strong UX, functionality for languages and distributor portals, and edit-ability and flexibility as a marketing tool and to support sales efforts.",
          broder: "lg:border-transparent"
        },
        
      ];
  return (
    <div className=' flex flex-col px-5 justify-center items-center pt-20 pb-10 gap-y-7 text-center'>
        <h1 className='text-sm md:text-xl font-bold   text-gray-600'>WHY COMPANIES HIRE US</h1>
        <h1 className='text-xl  md:text-3xl leading-5  text-bgdarkcolor font-bold'>A specialized partner in an ever-changing marketing landscape</h1>
        <h1 className=' text-sm md:text-base  max-md:leading-5 leading-loose md:w-11/12 text-gray-700 '>The fast-changing landscape of digital marketing tactics and technologies can be daunting and confusing to even the most experienced B2B marketers. Now more than ever, your website and digital marketing must deliver quality leads and a better return on investment. We’ll help you do this in several important ways.</h1>
        <div className='w-full grid grid-cols-2 leading-4 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {items.map((item, index) => (
        <div key={index} className={`flex  flex-col items-center gap-y-3 lg:border-r-2 ${item.broder}  pr-3  text-center w-full`}>
          <div className=" text-bgmain w-fit"><item.icon  size={25} /></div>
          <h3 className=' text-base font-semibold text-bgdarkcolor'>{item.title}</h3>
          <p className=' text-sm text-gray-600  md:w-9/12 lg:w-full'>{item.description}</p>
        </div>
      ))}
        </div>
        <Link href={'#'} className=' py-4 inline-flex text-white text-xs font-bold  mt-5 justify-center items-center  rounded-sm transition-all duration-500 px-8 bg-btncolor hover:bg-onHover hover:scale-105'>
            GET STARTED
          </Link>
    </div>
  )
}

export default Whyhireus