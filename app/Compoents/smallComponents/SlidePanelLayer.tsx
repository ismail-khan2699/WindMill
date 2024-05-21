import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { about } from "./menu";
interface SlidePanelProps {
    activeNavbar: string;
    setActiveNavbar: React.Dispatch<React.SetStateAction<string>>;
  }

export default function SlidePanelLayer({ activeNavbar, setActiveNavbar }: SlidePanelProps) {
  //  const [open, setOpen] = useState(true);
  return (
    <Transition.Root
      show={!!activeNavbar && activeNavbar !== "mainMenu"}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => {
          setActiveNavbar("mainMenu");
        }}
      >
        {/* <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child> */}

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
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-l-2xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="flex h-7 items-center">
                          <button
                            type="button"
                            className="flex gap-2 items-center relative rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={() => setActiveNavbar("mainMenu")}
                          >
                            <span className="sr-only">Back</span>
                            <ChevronLeftIcon
                              className="h-5 w-5 text-secondary-90"
                              aria-hidden="true"
                            />
                            <span className="text-gray-900 font-bold">
                              Back
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="text-secondary-90 font-bold mt-6">
                        About
                      </div>
                      <hr className="my-6" />
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">
                      {about.map((item) => (
                        <div
                          key={item.title}
                          className="relative pb-12 leading-6"
                        >
                          <h2 className="mt-1 text-secondary-90 text-2xl font-bold">
                            {item.title}
                          </h2>
                          <p className="mt-1 mb-6 text-secondary-90">
                            {item.description}
                          </p>
                          {item.links.map((link) => (
                            <a
                              key={link.title}
                              href={link.href}
                              className="mt-4 block text-secondary-90 hover:text-secondary-100 group"
                            >
                              <span className="flex items-center">
                                {link.icon && (
                                  <link.icon
                                    className="flex-none w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}
                                <span className="ml-2 font-bold group-hover:underline">
                                  {link.title}
                                </span>
                              </span>
                              <span className="block text-sm">
                                {link.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}