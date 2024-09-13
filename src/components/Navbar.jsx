import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/shared/logo.svg';
import hamburgerMenu from '../assets/shared/icon-hamburger.svg';
import closeMenu from '../assets/shared/icon-close.svg';

const Nav = () => {
  const Links = [
    { number: "00", name: "HOME", link: "/" },
    { number: "01", name: "DESTINATION", link: "/destination" },
    { number: "02", name: "CREW", link: "/crew" },
    { number: "03", name: "TECHNOLOGY", link: "/technology" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const closeMenuOnClick = () => setOpen(false);

  return (
    <div className='w-full fixed top-0 left-0 right-0'>
      <div className='md:flex items-center justify-between py-10 md:pl-10 pl-7 pr-10 md:pr-0'>

        <div className='flex items-center justify-between w-full md:w-auto'>
          <img className='w-8 h-8' src={logo} alt="Logo" />

          <div 
            onClick={() => setOpen(!open)} 
            className='text-3xl cursor-pointer md:hidden'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <img src={open ? closeMenu : hamburgerMenu} alt={open ? 'Close menu' : 'Open menu'} />
          </div>
        </div>

        <div className='lg:absolute lg:right-[35rem] lg:z-50 lg:w-[36%] lg:h-[0.031em] md:bg-gray-500'></div>

        <ul 
           className={`absolute m-auto right-0 md:m-0 md:flex items-center mt-5 md:mt-0 pt-5 pb-1 md:pb-0 pl-7 pr-24 md:static bg-gray-900 md:bg-navbar md:opacity-[0.9] md:backdrop-blur-lg md:z-auto z-[-1] md:w-auto transition-all duration-500 ease-in-out transform ${
            open ? 'top-20 opacity-[4]' : 'top-[-490px] opacity-0'
          }`}
        >
          {Links.map((link) => (
            <li 
              key={link.name} 
              className={`md:ml-8 text-xs font-roboto font-light tracking-wider md:my-0 my-7 border-b-2 ${
                location.pathname === link.link ? 'border-white' : 'border-transparent'
              }`}
              onClick={closeMenuOnClick}
            >
              <Link 
                to={link.link} 
                className='flex items-center pb-2 md:pb-5 text-gray-100 hover:text-gray-400 duration-500'
              >
                <span className='hidden lg:block lg:mr-2 lg:font-extrabold lg:text-white'>{link.number}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;