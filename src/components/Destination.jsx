import React, { useState, useEffect } from 'react';
import { useTypewriter } from "react-simple-typewriter";

import DesktopBgImage from '../assets/destination/background-destination-desktop.jpg';
import TabletBgImage from '../assets/destination/background-destination-tablet.jpg';
import MobileBgImage from '../assets/destination/background-destination-mobile.jpg';

import MoonImage from '../assets/destination/image-moon.png';
import MarsImage from '../assets/destination/image-mars.png';
import TitanImage from '../assets/destination/image-titan.png';
import EuropaImage from '../assets/destination/image-europa.png';


const Destination = () => {
  const [bgImage, setBgImage] = useState(DesktopBgImage);
  const [currentPlanet, setCurrentPlanet] = useState('Moon');
  const [typeEffect] = useTypewriter({
    words: [' PICK YOUR DESTINATION'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 0,
  }); 

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


  const getPlanetImage = () => {
    switch (currentPlanet) {
      case 'Mars':
        return MarsImage;
      case 'Titan':
        return TitanImage;
      case 'Europa':
        return EuropaImage;
      default:
        return MoonImage;
    }
  };

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

        <div className='absolute top-32 md:top-36 lg:top-32 pl-8 md:pl-11 lg:pl-0 lg:left-[7.5rem] flex flex-wrap gap-4 font-roboto tracking-wider text-lg'>
          <span className='text-gray-500 font-extrabold'>01</span>
          <h4 className='text-gray-200 font-light'>{typeEffect}</h4>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24 text-center lg:text-left items-center pt-48 md:pt-56 lg:pt-44 lg:pl-44 lg:items-start'>

          <div className='lg:pt-6'><img src={getPlanetImage()} className='w-40 h-40 md:w-56 md:h-56' alt={currentPlanet} /></div>

          <div className='grid grid-flow-row gap-5 md:gap-10 lg:gap-5'>

          <div className='text-gray-400 tracking-wider text-sm font-normal font-roboto md:pl-16 lg:pl-0'>
              <ul className='cursor-pointer flex gap-10 md:gap-12 lg:gap-6'>
                <li className={`pb-2 ${currentPlanet === 'Moon' ? 'border-b-2 border-white' : 'border-transparent'}`}>
                  <button onClick={() => setCurrentPlanet('Moon')} className="focus:outline-none">MOON</button>
                </li>
                <li className={`pb-2 ${currentPlanet === 'Mars' ? 'border-b-2 border-white' : 'border-transparent'}`}>
                  <button onClick={() => setCurrentPlanet('Mars')} className="focus:outline-none">MARS</button>
                </li>
                <li className={`pb-2 ${currentPlanet === 'Europa' ? 'border-b-2 border-white' : 'border-transparent'}`}>
                  <button onClick={() => setCurrentPlanet('Europa')} className="focus:outline-none">EUROPA</button>
                </li>
                <li className={`pb-2 ${currentPlanet === 'Titan' ? 'border-b-2 border-white' : 'border-transparent'}`}>
                  <button onClick={() => setCurrentPlanet('Titan')} className="focus:outline-none">TITAN</button>
                </li>
              </ul>
            </div>

            <div className='border-b-gray-500 border-b-[0.025em] w-80 md:w-[30rem] lg:w-[25rem] pb-6 md:pb-4'>
              <h1 className='text-white font-playfair tracking-widest text-6xl pb-4 md:pb-7 lg:pb-4 uppercase'>{currentPlanet}</h1>
              <p className='text-gray-400 text-xs font-normal tracking-wide leading-5 px-5 lg:px-0'>
                {currentPlanet === 'Moon' && "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
                {currentPlanet === 'Mars' && " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"}
                {currentPlanet === 'Europa' && "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
                {currentPlanet === 'Titan' && "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
              </p>
            </div>

            <div className='grid grid-flow-row lg:grid-flow-col gap-5 lg:gap-5'>
              <div>
                <h6 className='text-gray-400 text-xs font-normal tracking-widest pb-1'>AVG. DISTANCE</h6>
                <p className='tracking-widest text-white text-lg lg:text-xs font-playfair font-extralight'>
                  {currentPlanet === 'Moon' && '384,400 KM'}
                  {currentPlanet === 'Mars' && '225 MIL. KM'}
                  {currentPlanet === 'Europa' && '628 MIL. KM'}
                  {currentPlanet === 'Titan' && '1.6 BIL. KM'}
                </p>
              </div>
              <div>
                <h6 className='text-gray-400 text-xs font-normal tracking-widest pb-1'>EST. TRAVEL TIME</h6>
                <p className='tracking-widest text-white text-lg lg:text-xs font-playfair font-extralight'>
                  {currentPlanet === 'Moon' && '3 DAYS'}
                  {currentPlanet === 'Mars' && '9 MONTHS'}
                  {currentPlanet === 'Europa' && '3 YEARS'}
                  {currentPlanet === 'Titan' && '7 YEARS'}
                </p>
              </div>
            </div>


          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Destination;