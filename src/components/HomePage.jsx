import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DesktopBgImage from '../assets/home/background-home-desktop.jpg';
import TabletBgImage from '../assets/home/background-home-tablet.jpg';
import MobileBgImage from '../assets/home/background-home-mobile.jpg';
import { useTypewriter } from "react-simple-typewriter";

const HomePage = () => {
  const [bgImage, setBgImage] = useState(DesktopBgImage);
  const [typeEffect] = useTypewriter({
    words: [' SPACE'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const updateBgImage = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBgImage(MobileBgImage);
      } else if (width <= 1024) {
        setBgImage(TabletBgImage);
      } else {
        setBgImage(DesktopBgImage);
      }
    };

    updateBgImage();

    window.addEventListener('resize', updateBgImage);

    return () => {
      window.removeEventListener('resize', updateBgImage);
    };
  }, []);

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

     <div className='flex flex-col lg:flex-row max-lg:gap-24 lg:justify-between justify-center place-items-end max-lg:items-center min-h-screen xl:py-36 py-12 max-lg:py-16 md:px-[12.5%]'>
      
      <div className='flex flex-col justify-center max-lg:items-center max-lg:px-8'>
        <h4 className='text-gray-400 xl:text-2xl font-medium font-barlow tracking-[0.15rem]'>SO, YOU  WANT TO TRAVEL TO</h4>
        <h1 className='text-white font-bellefair xl:text-9xl text-8xl tracking-wider mt-7 min-h-[127px]'>{typeEffect}</h1>
        <p className='max-w-sm text-gray-400 font-barlow font-medium text-sm leading-6 tracking-wider xl:mt-5 text-center lg:text-left'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>

      <div className="animate-bounceSmall w-[8em] h-[8em] xl:text-3xl text-xl rounded-full  bg-white flex items-center justify-center"  onClick={() => navigate('/Destination')}>
        <button className="w-full h-full flex items-center justify-center font-bellefair tracking-wider">EXPLORE</button>
      </div>

     </div>

    </div>
  );
};

export default HomePage;