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
      <div className='container'>

        <div className='absolute top-32 md:top-36 lg:top-32 pl-8 md:pl-11 lg:pl-0 lg:left-[7.5rem] flex flex-wrap gap-4 font-roboto tracking-wider text-lg'>
          <span className='text-gray-500 font-extrabold'>02</span>
          <h4 className='text-gray-200 font-light'>{typeEffect}</h4>
        </div>

        <div className='flex flex-col md:flex-col-reverse lg:flex-row-reverse gap-9 text-center items-center pt-48 md:pt-56'>
          
          <div className='md:absolute md:bottom-0 lg:right-32'>
            <img src={selectedMember.image} className='w-72 h-72 md:w-[30rem] md:h-[30rem] lg:w-72 lg:h-72' alt={selectedMember.name} />
          </div>
          
          <div className='flex flex-col md:flex-col-reverse gap-10 lg:text-left lg:gap-8'>

            <div className='pt-4 md:pt-1 lg:pt-0 m-auto left-0 right-0 lg:ml-[7rem]'>
              <ul className='flex flex-wrap gap-4 md:gap-6 cursor-pointer'>
                {crewMembers.map((member, index) => (
                  <li
                    key={index}
                    className={`w-3 h-3 rounded-full ${selectedMember === member ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={() => setSelectedMember(member)}
                  ></li>
                ))}
              </ul>
            </div>

            <div className='grid grid-flow-row gap-3 tracking-widest  lg:pt-0 md:gap-5 lg:pl-[7rem]'>
              <h2 className='text-xl md:text-2xl font-roboto font-light text-gray-500 uppercase'>{selectedMember.role}</h2>
              <h1 className='text-3xl md-text-4xl font-playfair text-white -mt-2 uppercase'>{selectedMember.name}</h1>
              <p className='text-gray-400 text-xs font-normal tracking-wide leading-5 pt-2 px-12 md:px-48 lg:pl-0 lg:pr-[36rem]'>{selectedMember.description}</p>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Crew;