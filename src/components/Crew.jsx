import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DesktopBgImage from '../assets/crew/background-crew-desktop.jpg';
import TabletBgImage from '../assets/crew/background-crew-tablet.jpg';
import MobileBgImage from '../assets/crew/background-crew-mobile.jpg';

import Ansari from '../assets/crew/image-anousheh-ansari.png';
import Hurley from '../assets/crew/image-douglas-hurley.png';
import Shuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import Glover from '../assets/crew/image-victor-glover.png';

import { useTypewriter } from "react-simple-typewriter";

const crewMembers = [
  {
    name: 'Anousheh Ansari',
    role: 'Flight Engineer',
    image: Ansari,
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
  },
  {
    name: 'Douglas Hurley',
    role: 'Commander',
    image: Hurley,
    description: 'Douglas Hurley is an American astronaut and former Marine Corps officer. He was the pilot of the Space Shuttle Atlantis on its final mission, STS-135.',
  },
  {
    name: 'Mark Shuttleworth',
    role: 'Mission Specialist',
    image: Shuttleworth,
    description: 'Mark Shuttleworth is a South African entrepreneur and space tourist. He was the founder of Canonical Ltd, which is behind the Ubuntu operating system.',
  },
  {
    name: 'Victor Glover',
    role: 'Pilot',
    image: Glover,
    description: 'Victor Glover is an American astronaut and naval aviator. He is the pilot of the SpaceX Crew-1 mission to the International Space Station.',
  },
];

const Crew = () => {
  const [bgImage, setBgImage] = useState(DesktopBgImage);
  const [selectedMember, setSelectedMember] = useState(crewMembers[0]);
  const [typeEffect] = useTypewriter({
    words: [' MEET YOUR CREW'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 1,
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
        <div className='absolute top-[25%] max-lg:top-[15%] left-[12.5%] flex flex-wrap gap-4 font-barlow tracking-widest text-lg'>
          <span className='text-gray-500 font-extrabold'>02</span>
          <h4 className='text-gray-200 font-light'>{typeEffect}</h4>
        </div>

        <div className='flex md:flex-col lg:flex-row max-lg:flex-col-reverse max-lg:gap-5 md:justify-between justify-center place-items-end max-lg:items-center min-h-screen md:pt-64 lg:pt-32 pt-12 lg:px-[12.5%] max-lg:px-[10%]'>
          
          <div className='flex flex-col md:flex-col-reverse xl:pb-10 max-lg:text-center max-lg:items-center'>

            <div className='py-7 xl:py-20'>
              <ul className='flex flex-wrap gap-6 cursor-pointer'>
                {crewMembers.map((member, index) => (
                  <li
                    key={index}
                    className={`w-3 h-3 rounded-full ${selectedMember === member ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={() => setSelectedMember(member)}
                  ></li>
                ))}
              </ul>
            </div>

            <div className='grid grid-flow-row gap-6 tracking-widest'>
              <h2 className='text-3xl font-barlow text-gray-500 uppercase'>{selectedMember.role}</h2>
              <h1 className='text-4xl font-bellefair text-white uppercase'>{selectedMember.name}</h1>
              <p className='text-gray-400 text-sm font-medium tracking-wide leading-6 mt-2 max-w-sm'>{selectedMember.description}</p>
            </div>

          </div>

          <div className='max-w-[30%] xl:max-w-md max-lg:max-w-[50%]'>
            <img src={selectedMember.image} className='' alt={selectedMember.name} />
          </div>

        </div>


    </div>
  );
};

export default Crew;