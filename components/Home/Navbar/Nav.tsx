"use client";

import { NavLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//define props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [showNav, setShowNav] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        setShowNav(false);
      }

      lastScrollY.current = currentScrollY;

      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => setShowNav(true), 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-[7vh] z-[1000] bg-white bg-opacity-90 backdrop-blur-md shadow-lg transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between w-full xl:w-[95%] mx-auto h-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 mt-1">
            <Image
              src="/images/saribuologo.png"
              alt="Saribuo Logo"
              width={60}
              height={60}
            />
            <p className="text-2xl font-semibold hidden sm:block">saribuo</p>
          </Link>
          {/* Navlinks */}
          <div className="hidden lg:flex items-center space-x-15 flex-grow justify-end">
            {NavLinks.map((link) => {
              const isPurple = link.id === 1;
              return (
                <Link key={link.id} href={link.url}>
                  <p className={`nav_link ${isPurple ? "nav_link_purple" : ""}`}>
                    {link.label}
                  </p>
                </Link>
              );
            })}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4 ml-12">
            <button
              onClick={() => setShowModal(true)}
              className="md:px-6 md:py-1 px-3 py-1 text-purple-900 font-semibold text-base bg-gray-300 hover:bg-purple-300 transition-all duration-200 rounded-lg"
            >
              Join Us
            </button>
            {/*burgerrrr*/}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-gray-700 lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* pop up */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-[2000]">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <p className="mb-4">Follow us on our social platforms:</p>
            <div className="flex justify-around text-purple-900 text-lg font-medium mb-4">
              <a
                href="https://facebook.com/FarEasternUniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/fareasternuniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@FarEasternUniversity1928"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
