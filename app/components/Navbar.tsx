"use client";


import { IoIosArrowRoundForward } from "react-icons/io";

import { IoCallOutline } from "react-icons/io5";
import { TiMail } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



import { HiMenuAlt3 } from "react-icons/hi";

import { useState } from "react";


export default function Navbar(){


    const[isMenuOpen, setIsMenuOpen] = useState(false)
    return(
<main>
        <div className="md:bg-blue-950  md:w-full md:h-[48px]   md:mb-4 md:py-3 md:text-white md:flex md:items-center md:static hidden">
      <div className="flex items-center">
        <IoCallOutline className="ml-8"/>
        <p>(225) 555-0118</p>

        <TiMail className="ml-12 w-5 h-5"/>
        <p>michelle.river@exampl.com</p>

        <p className="ml-52">Follow us and get a chance to win 80% OFF</p>


        <p className="ml-48">Follow Us : </p>
        <div className="flex space-x-2 ml-2">
        <FaInstagram />
        <FaYoutube />
        <FaFacebook />
        <FaTwitter />
        </div>

        </div>
      </div>

        <nav className="flex items-center mt-6 mb-6">
        <h1 className=" font-bold ml-0 md:ml-[100px] text-2xl cursor-pointer text-blue-950">Bandage</h1>
     
  <div className="absolute sm:absolute md:static bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full fkex md:items-center px-5">
        <ul className="flex  ml-[120px] space-x-5  text-gray-500 font-semibold items-center">
        <li className="hover:underline duration-500 active:underline"><a href="/">Home</a></li>
        <li className="hover:underline duration-500 active:underline"><a href="/components/shop">Shop</a></li>
        <li className="hover:underline duration-500 active:underline"><a href="/components/about">About</a></li>
        <li className="hover:underline duration-500 active:underline"><a href="/components/blog">Blog</a></li>
        <li className="hover:underline duration-500 active:underline"><a href="/components/contact">Contact</a></li>
        <li className="hover:underline duration-500 active:underline"><a href="/components/pricing">Pricing</a></li>
       
      </ul>
      </div>
      <div className="flex items-center gap-6">
      <p className="flex items-center ml-[200px]   md:ml-[355px] text-sky-500 font-semibold">Login</p>
      <HiMenuAlt3 className="absolute sm:absolute md:hidden text-5xl cursor-pointer ml-[130px]" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold  text-lg 
          transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
          >
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/">Home</a></li>
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/components/shop">Shop</a></li>
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/components/about">About</a></li>
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/components/blog">Blog</a></li>
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/components/contact">Contact</a></li>
<li className="list-none w-full text-center p-4 hover:bg-sky-400 text-black transition-all cursor-pointer"><a href="/components/pricing">Pricing</a></li>


          </div>
      </div>
      <button className="hidden md:w-[252px] md:h-[48px]  text-white  font-semibold bg-sky-500 rounded-sm ml-10 md:flex items-center justify-center">Become a member<IoIosArrowRoundForward className="ml-2 w-7 h-7"/></button> 
        </nav>
        </main>
    )
}