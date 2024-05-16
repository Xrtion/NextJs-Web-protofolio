"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './Navlink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

const navLinks = [
    {
        title: "about",
        path: "#about"
    },
    {
        title: "Project",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
      <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
          <Link href='/' className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
          <div className='mobile-menu block md:hidden'>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'
            >
              {navbarOpen ? (
                <XMarkIcon className='h-5 w-5' />
              ) : (
                <Bars3Icon className='h-5 w-5' />
              )}
            </button>
          </div>
          <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:flex md:w-auto`} id='navbar'>
            <ul className='flex flex-col md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  

export default Navbar