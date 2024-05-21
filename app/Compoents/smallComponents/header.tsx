"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import SlidePanel from "./Sliderbar";

export default function HeaderComponent() {
  const [activeNavbar, setActiveNavbar] = useState("");
  return (
    <header className="relative isolate z-40">
      <div className="flex lg:flex-1 justify-between items-center  max-w-4xl py-4 lg:py-8">

        <div className="flex">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md text-white hover:text-white/70"
            onClick={() => setActiveNavbar("mainMenu")}
          >
            <IoMdMenu size={40}/>
          </button>
        </div>
      </div>

      <SlidePanel
        activeNavbar={activeNavbar}
        setActiveNavbar={setActiveNavbar}
      />
    </header>
  );
}