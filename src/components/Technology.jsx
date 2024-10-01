import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DesktopBgImage from '../assets/technology/background-technology-desktop.jpg';
import TabletBgImage from '../assets/technology/background-technology-tablet.jpg';
import MobileBgImage from '../assets/technology/background-technology-mobile.jpg';

import LandVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import LandCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import LandSpaceport from '../assets/technology/image-spaceport-landscape.jpg';

import PortVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import PortCapsule from '../assets/technology/image-space-capsule-portrait.jpg';
import PortSpaceport from '../assets/technology/image-spaceport-portrait.jpg';

import { useTypewriter } from "react-simple-typewriter";

const Technology = () => {
  const [bgImage, setBgImage] = useState(DesktopBgImage);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const [typeEffect] = useTypewriter({
    words: [' SPACE LAUNCH 101'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const updateBgImage = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBgImage(MobileBgImage);
        setIsLargeDevice(false);
      } else if (width <= 1024) {
        setBgImage(TabletBgImage);
        setIsLargeDevice(false);
      } else {
        setBgImage(DesktopBgImage);
        setIsLargeDevice(true);
      }
    };

    updateBgImage();

    window.addEventListener('resize', updateBgImage);

    return () => {
      window.removeEventListener('resize', updateBgImage);
    };
  }, []);

  const content = [
    {
      landscape: LandVehicle,
      portrait: PortVehicle,
      title: 'Launch Vehicle',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      landscape: LandSpaceport,
      portrait: PortSpaceport,
      title: 'Spaceport',
      description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      landscape: LandCapsule,
      portrait: PortCapsule,
      title: 'Space Capsule',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
  ];

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
        <div className='absolute top-[25%] max-lg:top-[15%] left-[12.5%] flex flex-wrap gap-4 font-barlow tracking-widest text-lg'>
          <span className='text-gray-500 font-extrabold'>03</span>
          <h4 className='text-gray-200 font-light'>{typeEffect}</h4>
        </div>

        <div className='flex flex-col lg:flex-row-reverse lg:gap-0 gap-14 text-center items-center pt-48 lg:pt-44'>

          <div className='px-1 lg:px-0 '>
            <img
              className='w-full lg:w-[45rem]'
              src={isLargeDevice ? content[selectedTab - 1].portrait : content[selectedTab - 1].landscape}
              alt={content[selectedTab - 1].title}
            />
          </div>

          <div className='flex flex-col lg:flex-row gap-8'>

            <div className='m-auto left-0 right-0 lg:m-0 lg:ml-[7rem]'>
              <ul className='flex flex-wrap gap-6 lg:gap-8 cursor-pointer'>
                <li aria-label="Launch Vehicle"
                    className={`w-10 h-10 rounded-full border-[0.063em] border-gray-500 text-white flex justify-center items-center text-lg ${selectedTab === 1 ? 'bg-gray-500' : ''}`}
                    onClick={() => setSelectedTab(1)}
                >1</li>
                <li aria-label="Spaceport"
                    className={`w-10 h-10 rounded-full border-[0.063em] border-gray-500 text-white flex justify-center items-center text-lg ${selectedTab === 2 ? 'bg-gray-500' : ''}`}
                    onClick={() => setSelectedTab(2)}
                >2</li>
                <li aria-label="Space Capsule"
                    className={`w-10 h-10 rounded-full border-[0.063em] border-gray-500 text-white flex justify-center items-center text-lg ${selectedTab === 3 ? 'bg-gray-500' : ''}`}
                    onClick={() => setSelectedTab(3)}
                >3</li>
              </ul>
            </div>

            <div className='grid grid-flow-row gap-3 tracking-widest pt-4 lg:pt-0 md:gap-5 lg:gap-3 lg:pl-0 lg:text-left'>
              <h6 className='text-lg font-roboto font-light text-gray-400 uppercase'>The terminology...</h6>
              <h2 className='text-3xl md:text-4xl font-playfair text-white -mt-2 uppercase'>{content[selectedTab - 1].title}</h2>
              <p className='text-gray-400 text-xs font-normal tracking-wide leading-5 pt-2 px-16 md:px-48 lg:p-0 lg:pr-[15rem]'>{content[selectedTab - 1].description}</p>
            </div>

          </div>

        </div>

      </div>
  );
};

export default Technology;

