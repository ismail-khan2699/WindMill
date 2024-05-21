"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
interface SlidePanelProps {
    activeNavbar: string;
    setActiveNavbar: React.Dispatch<React.SetStateAction<string>>;
  }

export default function SlidePanel({ activeNavbar, setActiveNavbar }: SlidePanelProps) {

  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const handleLinkClick = (num:string) => {
    setShowContent2(false);
    setShowContent3(false);
    setShowContent(false);
    setShowContent4(false);

    if(num==='1'){
      setShowContent(!showContent); 
    }
    else if(num==='2'){
      setShowContent2(!showContent2); 
    }
    else if(num==='3'){
      setShowContent3(!showContent3); 
      }
    else if(num==='4'){
        setShowContent4(!showContent4); 
        }
  };
  return (
    <>
      <Transition.Root show={!!activeNavbar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setActiveNavbar("")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <div className="flex h-full flex-col overflow-y-auto p-4  text-white  bg-bgdarkcolor shadow-xl ">
                          <button
                              type="button"
                              className="flex group gap-2 items-center border-b border-white relative py-2 text-white/70 hover:text-gray-500"
                              onClick={() => setActiveNavbar("")}
                            >
                              <span className="sr-only">Close</span>
                              <FaXmark
                                className="h-5 w-5 text-white/60 group-hover:text-white"
                                aria-hidden="true"
                              />
                              
                            </button>
                          <Link href={'#'} className=" border-b border-white font-[400] hover:text-white/80 py-3">
                          612.521.4286
                          </Link>
                          <Link href={'#'} className=" border-b border-white font-[400] hover:text-white/80 py-3">
                          HOME
                          </Link>
                          <div className=" group relative w-full border-b transition-all duration-300 border-white">
                          <Link href={'#'} onClick={()=>handleLinkClick('1')}  className="inline-flex  gap-x-1 items-center  font-[400] hover:text-white/80 py-3">
              SERVICES<FaChevronDown />
                          </Link>
                          {showContent && (
                            <div className=" p-4 ">
                              <Link href={'#'} className=" inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">All Services</Link> <br />
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Web Design & Development</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Digital Marketing, ABM & Analytics</Link>
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80  w-full py-2">UX, Visual Design & Branding</Link>

                            </div>
                          )
                          }
                          </div>
                          <Link href={'#'} className=" border-b border-white font-[400] hover:text-white/80 py-3">
                          CASE STUDIES
                          </Link>
                          <div className=" group relative w-full border-b transition-all duration-300 border-white">
                          <Link href={'#'} onClick={()=>handleLinkClick('2')}  className="inline-flex  gap-x-1 items-center  font-[400] hover:text-white/80 py-3">
              INDUSTRIES<FaChevronDown />
                          </Link>
                          {showContent2 && (
                            <div className=" p-4 ">
                              <Link href={'#'} className=" inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Industrial, Automation, Manufacturing</Link> <br />
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Engineering, Technology, Technical Consulting</Link>
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80  w-full py-2">Life Sciences & Medical</Link>

                            </div>
                          )
                          }
                          </div>
                          <div className=" group relative w-full border-b transition-all duration-300 border-white">
                          <Link href={'#'} onClick={()=>handleLinkClick('3')}  className="inline-flex  gap-x-1 items-center  font-[400] hover:text-white/80 py-3">
              ABOUT US<FaChevronDown />
                          </Link>
                          {showContent3 && (
                            <div className=" px-4 ">
                              <Link href={'#'} className=" inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">About Us </Link> <br />
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">About You</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">An EOS-Driven Company</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Our Process</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Testimonials</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Careers</Link>
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80  w-full py-2">FAQs</Link>

                            </div>
                          )
                          }
                          </div>
                          <Link href={'#'} className=" border-b border-white font-[400] hover:text-white/80 py-3">
                          CASE STUDIES
                          </Link>
                          <div className=" group relative w-full border-b transition-all duration-300 border-white">
                          <Link href={'#'} onClick={()=>handleLinkClick('4')}  className="inline-flex  gap-x-1 items-center  font-[400] hover:text-white/80 py-3">
              RESOURCES<FaChevronDown />
                          </Link>
                          {showContent4 && (
                            <div className=" px-4 ">
                              <Link href={'#'} className=" inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Articles</Link> <br />
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Whitepapers</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Training</Link>
                              <Link href={'#'} className="  inline-flex text-md font-[200] text-white hover:text-white/80 border-b w-full border-white/70 py-2">Webinars</Link>
                              <Link href={'#'} className="  inline-block text-md font-[200] text-white hover:text-white/80  w-full py-2">Downloadables</Link>

                            </div>
                          )
                          }
                          </div>
                          <Link href={'#'} className=" border-b border-white font-[400] hover:text-white/80 py-3">
                          CONTACT
                          </Link>

                          <div className="relative bg-gray-400 bg-opacity-50 flex items-center  w-full justify-between group group-focus:border-bgcolor my-4 px-2">
                          <input type="text" className="bg-transparent w-11/12 text-gray-200  placeholder-gray-300 focus:outline-none border-transparent py-1" placeholder="Search" />
                          <Link href={'#'} className=" text-white font-bold">
                          <IoSearch />
                          </Link>
                          </div>
                          <div className=" mt-6">
                            <p className=" mb-2 font-bold "> Subscribe to Our Newsletter</p>
                          <input type="email" className=" p-2 bg-white w-full text-gray-900  placeholder-gray-600 focus:outline-none border-transparent py-1" placeholder="Enter Your Email" />
                            <p className=" text-sm text-red-400">Please complete this required field.</p>
                            <Link href={'#'} className=' text-white font-bold flex justify-center items-center py-2 my-3 rounded-sm transition-all duration-400 px-7 bg-btncolor hover:bg-onHover hover:scale-105'>
                            SUBSCRIBE
                            </Link>
                          </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}