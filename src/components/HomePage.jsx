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
      <div className='container'>

        <div className='grid grid-flow-row gap-10 md:grid-flow-col text-center lg:text-left'>
          
          <div className='grid grid-flow-row gap-3 py-[45%] md:py-[37%] lg:py-[18%] lg:px-32'>
          <h4 className='text-gray-300 lg:text-lg text-base tracking-widest font-roboto font-light'>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className='text-white font-playfair tracking-wide text-8xl' style={{ minHeight: '100px' }}>{typeEffect}</h1>
          <p className='text-gray-400 lg:text-xs text-sm font-medium pt-6 tracking-wide leading-5 px-16 sm:px-48 lg:pl-0 lg:pr-[26rem]'>
              Let’s face it; if you want to go to space, 
              you might as well genuinely go to outer space 
              and not hover kind of on the edge of it. Well sit back, 
              and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='animate-bounceSmall hover:font-semibold flex w-[10em] h-[10em] md:w-[12em] md:h-[12em] lg:w-[10em] lg:h-[10em] justify-center bg-white rounded-full cursor-pointer absolute m-auto left-0 right-0 bottom-20 lg:left-1/2 lg:bottom-16'
            onClick={() => navigate('/Destination')}>
            <button className="text-black text-xl font-playfair tracking-wider hover:font-semibold">EXPLORE</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;