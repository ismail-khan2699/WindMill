import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { GoDotFill } from "react-icons/go";
const Whatwedo = () => {
  const list=[
    { data:'Industrial Web Design', link:'#'},
    { data:'SEO (Search Engine Optimization)', link:'#'},
    { data:'Website Development', link:'#'},
    { data:'B2B Digital Marketing & ABM', link:'#'},
    { data:'PPC/Paid Search & SEM (Search Engine Marketing)', link:'#'},
    { data:'Content Strategy', link:'#'},
    { data:'UX Consulting, Audits & Research', link:'#'},
    { data:'Branding & Messaging Evolution', link:'#'},
    { data:'Marketing Automation, Sales Enablement & CRM Integration', link:'#'},
    { data:'Web Security & Maintenance', link:'#'},
  ]
  return (
    <div className='relative h-auto w-full'>
   
    <Image alt="" src={'/Windmillbg.png'} height={100} width={100} className="  h-5/6 top-0 left-0 w-auto max-md:hidden absolute"/>        
    <div className='relative flex flex-col gap-y-6 z-10 max-md:py-10 p-5 md:p-20'>
    <h1 className=" text-sm md:text-xl font-bold   text-gray-600">WHAT WE DO</h1>
    <h2 className=" text-xl  md:text-3xl leading-5  text-bgdarkcolor font-bold">Windmill Strategy is an industrial web design and B2B digital marketing agency that helps companies with complex offerings attract and convert their ideal audiences</h2>
    <p className="  text-sm md:text-base  max-md:leading-5 leading-loose md:w-11/12 text-gray-700">Windmill Strategy helps B2B marketers get more done. Our collaborative, responsive style is designed to build the bandwidth and expertise of your marketing team and pinpoint the best practices and tactics that apply to your company and your goals. We’ll help you communicate the value of your products and services with clarity and precision, as you increase your impact and accelerate sales velocity</p>
    <div className="w-full grid grid-cols-2 leading-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {list.map((data, index) => (
    <Link href={data.link} key={index} className="flex  py-2 justify-start">
      <span className=" text-gray-500  mx-2">&#8226;</span><span className="hover:underline text-bgdarkcolor hover:text-btncolor transition-all duration-300">{data.data}</span>
    </Link>
  ))}
</div>
<Link href={'#'} className="font-semibold group flex gap-x-1 pt-8 items-center  text-btncolor transition-all duration-200 hover:text-onHover">
    CONTACT US TO LEARN HOW
  <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-2 text-btncolor/70 group-hover:text-onHover">&gt;</span>
</Link>
    </div>
    </div>
  )
}

export default Whatwedo