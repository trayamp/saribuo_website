'use client';

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { CgClose } from "react-icons/cg";

//define props
type Props ={
  showNav:boolean,
  closeNav: () => void;
};

const MobileNav = ({closeNav, showNav}: Props) => {

  const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";


  return <div>
{/* Mobile Navigation Component */}
  <div className={`fixed inset-0 z-[1000] h-screen bg-black transition-opacity duration-500 ${showNav ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>

  <div className={`text-white ${navOpen} fixed justify-start flex flex-col h-full transform-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-neutral-900 space-y-6 z-[100006]`}>

    {/* Logo Section */}
    <div className="flex items-center mt-4 ml-3">
      <Image src="/images/saribuologo(white).png" alt="Saribuo Logo" width={60} height={60} />
      <p className="text-3xl font-semibold ml-2">saribuo</p>
    </div>
    {NavLinks.map((link) => {
      return <Link key={link.id} href={link.url}>
        <p className="nav_link !text-white text-[20px] ml-12 border-b-[1px] pb-2 border-white sm:text-[30px]">{link.label}</p>
      </Link>
    })}
    <CgClose onClick={closeNav} className="absolute top-[1.7rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6 text-white" />
  </div>
</div>;
}

export default MobileNav