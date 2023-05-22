'use client';
import React, { useState } from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
    <div className={`${styles.width} relative`}>
      <div className="w-full flex justify-between items-center absolute top-[15px]">
        <div>
          <Image src={logo} alt="" className="w-[150px] md:w-[200px]" />
        </div>

        <div>
          <ul className="hidden md:flex gap-12 text-sm tracking-[-0.02em] text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <HiOutlineMenuAlt3 className="text-white mr-[25px] cursor-pointer" size={32}/>
          </div>
        </div>
      </div>
    </div>


      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="relative z-[200]">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={logo} width="87" height="35" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col">
              <ul className="uppercase">
                <Link href="/#">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    About Us
                  </li>
                </Link>
                <Link href="/#faq">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Navbar;
