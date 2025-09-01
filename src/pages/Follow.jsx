// src/components/Follow.jsx

import React, { useState } from 'react';

// Make sure your image paths are correct
import junieMedia from '../assets/Follow/youtube.png'; 
import daveMedia from '../assets/Follow/linkedino.png'; 
import henryMedia from '../assets/Follow/instagram.png'; 

const profiles = [
  { 
    name: 'Youtube', 
    media: junieMedia,
    url: 'https://www.youtube.com/@Unscripted_Plans', // 🔗 replace with your real link
    cardPosition: 'top-1/2 left-1/4 -translate-y-1/2',
    textColor: 'text-[#bf6194]'
  },
  { 
    name: 'Linked In', 
    media: daveMedia, 
    url: 'https://www.linkedin.com/in/khushi-pandey-9a441625b/', // 🔗 replace
    cardPosition: 'top-1/2 right-1/4 -translate-y-1/2',
    textColor: 'text-[#09454c]'
  },
  { 
    name: 'InstaGram', 
    media: henryMedia, 
    url: 'https://www.instagram.com/khush94321/', // 🔗 replace
    cardPosition: 'bottom-20 left-1/2 -translate-x-1/2',
    textColor: 'text-[#FFD1DC]'
  },
];

function Follow() {
  const [activeIndex, setActiveIndex] = useState(null); 
  const activeProfile = activeIndex !== null ? profiles[activeIndex] : null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: activeProfile ? `url(${activeProfile.media})` : 'none',
          backgroundColor: activeProfile ? 'transparent' : 'black', 
          filter: activeProfile ? 'blur(30px) brightness(0.5)' : 'none',
        }}
      ></div>

      {/* Main Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center"
        onMouseLeave={() => setActiveIndex(null)}
      >
        
        {/* Top Text */}
        <p className="text-sm text-white/50 absolute top-10 font-mono">(follow.)</p>

        {/* Dynamic Card Image (Clickable) */}
        {activeProfile && ( 
          <a 
            href={activeProfile.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`absolute w-120 h-52 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 z-30 ${activeProfile.cardPosition}`}
          >
            <img
              src={activeProfile.media}
              alt={`${activeProfile.name} preview`}
              className="w-full h-full object-cover"
            />
          </a>
        )}

        {/* Names List (Clickable) */}
        <div className="flex flex-col items-center justify-center z-20">
          {profiles.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h1
                className={`
                  text-9xl font-medium cursor-pointer transition-all duration-500 ease-in-out
                  ${activeIndex === null ? 'text-white' : (activeIndex === index ? profile.textColor : 'text-white/30')}
                  ${activeIndex === null ? 'scale-100' : (activeIndex === index ? 'scale-110' : 'scale-100')}
                `}
              >
                {profile.name}
              </h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Follow;
