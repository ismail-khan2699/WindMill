import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import HeaderComponent from './header';




const NavBarList = () => {
  const Aboutlinks = [
    { text: 'About Us', href: '#' },
    { text: 'About You', href: '#' },
    { text: 'An EOS-Driven Company', href: '#'},
    { text: 'Our Process', href: '#'},
    { text: 'Testimonials', href: '#' },
    { text: 'Careers', href: '#'},
  ];
  const Resources = [
    {text:'Articles', href:'#'},
    {text:'Whitepapers', href:'#'},
    {text:'Training', href:'#'},
    {text:'Webinars', href:'#'},
  ];
  
  return (
    <>
    <div className="self-end flex max-lg:hidden mt-5 z-20 overflow-visible">
        <Popover>
          <PopoverButton className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <span className="text-md inline-flex  gap-x-1 justify-center items-center font-semibold ">
              SERVICES<FaChevronDown />
             </span>
             <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className=" h-[80vh] w-full mt-5 z-50 bg-white "
            >
             <div className=' h-full w-full flex z-50 justify-between '>
              <div className="w-1/4 px-5 py-10 text-white h-full bg-bgcolor">
                <h1 className=' font-bold text-2xl'>Modern B2B Marketing</h1>
                <p className=' my-5 text-base font-light w-11/12 justify-start'>We help B2B marketers achieve greater impact. Together, we’ll align your marketing with how today’s buyers are finding solutions, communicate the quality of your offerings, and empower marketing to work cohesively with sales to drive business.</p>
                <div className=' border-white bg-transparent hover:bg-white hover:text-btncolor w-fit px-5 border-2 py-2 font-bold transition-all duration-300 hover:scale-105'>LEARN MORE</div>
              </div>
              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 items-center justify-center'>
              <FaLaptopCode className='text-bgcolor group-hover:text-btncolor transition-colors duration-300' size={70} />
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
               WEB DESIGN & DEVELOPMENT &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
                 Websites to support sales, drive leads, sell online, automate back office functions, increase visibility, & communicate the quality of your offerings.
                 <br /><br />
                 Strategy & Planning, Content Strategy, Writing, SEO, Web Development, Integrations & Automations, E-commerce, GDPR, Accessibility, Hosting, Ongoing Support
             </p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>
              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 items-center justify-center'>
              <FaChartLine className='text-bgcolor group-hover:text-btncolor transition-colors duration-300' size={70} />
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
                Digital Marketing, ABM, & Analytics &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
             Inbound & outbound marketing to attract, engage & nurture niche audiences over complex buying cycles, increasing lead quality & quantity.
              <br /><br />
              Strategy & Planning, Inbound Marketing, SEO, PPC, CRO, Account Based Marketing (ABM), Content Marketing, Sales Enablement, CRM, Marketing Automation, Email Marketing, Social Media, Analytics & Insights.
              </p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>


              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 items-center justify-center'>
              <FaPencilRuler className='text-bgcolor group-hover:text-btncolor transition-colors duration-300' size={50} />
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
              UX, Visual Design, & Branding &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
             Cohesive brands & user experiences that reflect the quality of your offerings, increase conversions, & turn prospects into customers.
                 <br /><br />
                 Research & Strategy, UX & Visual Design, Web & Graphic Design, Logo & Brand Evolution, Positioning and Key Message Development, ICP & Persona Development, Sales Collateral, Sales Enablement.
             </p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>


             </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Link className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'#'}>
          <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
              CASE STUDIES
             </span>
             <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </Link>

        <Popover>
          <PopoverButton className="text-sm/6 px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
              INDUSTRIES<FaChevronDown />
             </span>
      <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className=" h-auto w-full mt-5 z-50 bg-white "
            >
             <div className=' h-full w-full flex justify-between '>
              <div className="w-1/4 px-5 py-10 text-white h-full bg-bgcolor">
                <h1 className=' font-bold text-2xl'>Technical Industries</h1>
                <p className=' my-5 text-base font-light w-11/12 justify-start'>We help B2B businesses with complex products and services; multiple audiences, decision-makers; long sales cycles; and technical, sophisticated buyers. We'll help you reach niche audiences and engage them with clear, useful information and a great experience.</p>
                <div className=' border-white bg-transparent hover:bg-white hover:text-btncolor w-fit px-5 border-2 py-2 font-bold transition-all duration-300 hover:scale-105'>LEARN MORE</div>
              </div>
              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 items-center justify-center'>
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
              Industrial, Automation, Manufacturing &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
            Industrial, manufacturing, industrial automation, robotics, engineering, plastics, automotive.</p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>
              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 items-center justify-center'>
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
              Engineering, B2B Technical Services, Technology &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
             Supply chain, big data, artificial intelligence, technology, engineering, software, security, consulting, training, oil & gas, specialty & B2B services.</p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>


              <div className="w-1/4 px-5 my-10 py-5 group text-gray-800 h-fit border-r-2">
            <Link href={'#'} className='flex gap-x-3 '>
              <h1 className='font-bold text-xl flex w-fits group-hover:text-btncolor transition-colors duration-300'>
              Life Sciences & Medical &gt;
               </h1>
             </Link> 
             <p className='my-5 text-sm font-light w-11/12 justify-start'>
             Medical device, biotech, pharmaceutical, genomics, precision medicine, medical & life sciences.</p>
    <div className=' bg-transparent group-hover:text-btncolor flex  font-bold transition-all duration-300 hover:scale-105'>
      LEARN MORE <span className='inline-block transition-transform duration-300 transform group-hover:translate-x-2'>&gt;</span>
    </div>
              </div>


             </div>
            </PopoverPanel>
          </Transition>
        </Popover>

       

        <Popover>
          <PopoverButton className="text-sm/6 px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
              ABOUT US<FaChevronDown />
             </span>
      <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className=" h-fit w-auto mt-5 absolute z-50 left-0 bg-bgcolor p-5"
            >
             <div className=' h-fit w-auto text-white  flex flex-col justify-between '>
              {Aboutlinks.map((item, index)=>(
                  <Link key={index} href={item.href} className=' font-light py-2 border-b transition-all duration-300 pr-4 hover:text-white/60 border-white/50'>{item.text}</Link>
              ))
              }
              
              <Link href={'#'} className=' py-2 font-light hover:text-white/60'>FAQS</Link>



             </div>
            </PopoverPanel>
          </Transition>
        </Popover>

    


        <Link className="text-sm/6  px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white" href={'#'}>
          <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
              PRICING
             </span>
             <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </Link>

        
          <Popover>
          <PopoverButton className="text-sm/6 px-2 font-semibold relative group text-white focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <span className="text-md inline-flex gap-x-1 justify-center items-center font-semibold ">
              RESOURCES<FaChevronDown />
             </span>
      <div className="absolute left-0 -bottom-3 w-0 h-1  bg-white transition-all duration-300 group-hover:w-full group-focus:w-full"></div>
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className=" h-fit w-auto mt-5 absolute z-50 left-0 bg-bgcolor p-5"
            >
             <div className=' h-fit w-auto text-white  flex flex-col justify-between '>
              {Resources.map((item, index)=>(
                  <Link key={index} href={item.href} className=' font-light py-2 border-b transition-all duration-300 pr-4 hover:text-white/60 border-white/50'>{item.text}</Link>
              ))
              }
              
              <Link href={'#'} className=' py-2 font-light transition-all duration-300 pr-4 hover:text-white/60'>Downloadables</Link>



             </div>
            </PopoverPanel>
          </Transition>
        </Popover>
        </div>
    <div className=' lg:hidden self-end text-white'>
                <HeaderComponent/>
    </div>
    
    
    </>
    
  )
}

export default NavBarList