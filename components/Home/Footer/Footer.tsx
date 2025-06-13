import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-purple-900 py-24">
      <div className="container mx-auto px-6">
        {/* Logo + Brand Name side by side */}
        <div className="flex items-center">
          <Image
            src="/images/saribuologo(white).png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="text-white text-3xl font-semibold ml-1">saribuo</span>
        </div>

        {/* Copyright below, centered */}
        <p className="text-white text-sm mt-4">
          © 2025 Saribuo. All rights reserved.
        </p>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 mt-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='w-4 h-4 text-white  cursor-pointer hover:animate-bounce'/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='w-4 h-4 text-white  cursor-pointer hover:animate-bounce'/>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='w-4 h-4 text-white h cursor-pointer hover:animate-bounce'/>
            </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
