import React from 'react';
import backgroundImage from './Images/background_image.jpg';
import iconImage from './Images/icon_image.png';

export const WhatToDo = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-fixed bg-no-repeat bg-cover container mx-auto px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <img
            className="max-w-full h-auto m-auto pt-24"
            src={iconImage}
            alt="diving_icon"
          />
          <h4 className="mt-12 text-4xl tracking-wider font-medium text-white text-center">FIND THE UNDERWATER TREASURES OF THE RED SEA</h4>
          <button className="relative left-1/2 -translate-x-1/2 my-12 bg-yellow-500 rounded-full p-5 hover:bg-white transform hover:-translate-y-0.5 focus:outline-none duration-500"><a className="p-5 text-white text-xl font-medium hover:text-yellow-500 duration-500" href="/">WHAT TO DO</a></button>
        </div>
      </div>
    </>
  )
}
