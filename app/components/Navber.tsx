"use client"
import {motion} from "framer-motion"

import Link from "next/link";
import Button from "./Button";
import { BiShoppingBag } from "react-icons/bi";

import { useRef } from "react";
import { getTransition } from "@/utils/getTransition";

const Navber = () => {
  const navRef = useRef(null)
  console.log(navRef?.current);
const handleResponsiveNavbar = ()=>{


}

  return (
    <motion.header initial={{y:"-100%"}} animate={{y:0}} transition={getTransition(0.8)} className="h-20 fixed top-0 left-0 right-0 bg-light z-[100] backdrop-blur-lg border border-dark/10">
        <nav className=" ">
        <button onClick={handleResponsiveNavbar} className="md:hidden px-5  max-lg:visible">⇒</button>

        <div ref={navRef} className="bg-accent1  text-light w-[70vw] h-screen hidden ">
        <ul className="flex flex-col px-5 py-5 gap-5">
            <li>
              <Link href="/home" className="link-item ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        </nav>


      <div className="wrapper w-full h-full flex justify-between items-center max-md:hidden">
      
        <nav className="nav-start">
          <Link
            href="/"
            className="text-xl font-semibold text-accent1 capitalize link-item"
          >
            BuzzlyShop
          </Link>
        </nav>
        <nav className="nav-middle">
          <ul className="flex gap-5">
            <li>
              <Link href="/home" className="link-item ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-end flex gap-5 items-center">
          <Link href="/cart" className="relative text-2xl ">
            <BiShoppingBag />
            <span className="absolute -right-2 -bottom-2 text-xs h-5 w-5 rounded-full bg-dark text-light flex justify-center items-center">
              10
            </span>
          </Link>
          <Button href="/login" placeholder="Login" color="green" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navber;
