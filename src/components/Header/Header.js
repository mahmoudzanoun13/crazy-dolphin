import React, { useState } from 'react';
import { MenuOutline } from 'react-ionicons';
import { CloseOutline } from 'react-ionicons';
import logo from './Images/logo.jpg';

export const Header = () => {
  const Links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Program", link: "/program"},
    {name: "Booking", link: "/booking"},
    {name: "Things to do", link: "/things_to_do"},
    {name: "Contact", link: "/contact"},
  ];
  const [open, setOpen] = useState(false);

  return (
      <header id="header">
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
          <nav className='md:flex justify-between items-center bg-white py-4 md:px-10 px-7'>
            <div>
              <img className='w-20 h-auto' src={logo} alt="logo_image" />
            </div>
            <div
              onClick={() => setOpen(!open)}
              className='text-3xl absolute right-8 top-12 cursor-pointer md:hidden'
            >
              {
                open
                ? <CloseOutline />
                : <MenuOutline />
              }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
              {
                Links.map(link => (
                  <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={ link.link } className='text-gray-800 hover:text-gray-400 duration-500'>{ link.name }</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </header>
  )
}
