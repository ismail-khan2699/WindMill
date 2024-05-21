import Image from "next/image";
import Link from "next/link";
import React from 'react'

const ProductComponent = () => {
  return (
    <div className=' h-auto bg-[#efefef] py-10 px-5'>
        <div className=' flex flex-col md:flex-row'>
            <div className="w-full md:w-1/2 md:p-5 flex flex-col gap-y-7">
            <p className=" text-sm md:text-xl font-bold   text-gray-600">YOUR B2B INDUSTRIAL EXPERT PARTNER</p>
            <h1 className="  text-xl  md:text-3xl leading-5  text-bgdarkcolor font-bold">B2B marketing is dated and ineffective</h1>
            <h3 className="text-sm md:text-base  max-md:leading-5 leading-loose md:w-11/12 text-gray-700">Many B2B marketing practices haven’t caught up to the way today’s customers actually make decisions. Marketers are overstretched, and many solutions out there are “productized,” not customized for the business success of B2B industrial, technical and B2B companies. We take a customized approach to addressing your specific needs with modern websites, tools, and initiatives. Our goal is to support your business metrics and business success by making the most of your sales team’s efforts with digital marketing that’s centered on lead quality over quantity.</h3>
            <h3 className="text-sm md:text-base  max-md:leading-5 leading-loose md:w-11/12 text-gray-700"><span className=" font-bold ">Not sure where to start?</span> As a full-service marketing partner, we’ll collaborate on a plan that prioritizes your goals. Whether your most urgent need is a website redesign, agile improvements, updated branding, print materials, SEO, paid search, ABM, or B2B digital marketing or other marketing automation, we’ve got you covered.</h3>
            <Link href={'#'} className="font-semibold group flex gap-x-1 pt-8 items-center text-btncolor transition-all duration-200 hover:text-onHover">
    CONTACT US
  <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-2 text-btncolor/70 group-hover:text-onHover">&gt;</span>
</Link>
            </div>
            <div className="w-full md:w-1/2 md:p-5 max-md:py-5">
                <Image src={'/abc.png'}  width={200} className=" w-full h-auto" height={200} alt="dihckjjsn" />
            </div>
        </div>
    </div>
  )
}

export default ProductComponent