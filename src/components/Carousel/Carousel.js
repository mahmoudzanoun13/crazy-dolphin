import React from 'react';
import slideOne from './Images/image_1.jpg';
import slideTwo from './Images/image_2.jpg';
import slideThree from './Images/image_3.jpg';
import slideFour from './Images/image_4.jpg';

export const Carousel = () => {
  
  return (
      <div id="carouselExampleSlidesOnly" className="carousel slide relative top-28 z-10" data-bs-ride="carousel">
          <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                  <h1 className="absolute sm:top-1/2 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
                  <h2 className="absolute sm:top-1/2 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
                  <button className="hidden md:block absolute top-3/4 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><a className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" href="/">WHO WE ARE</a></button>
                  <img
                      src={slideOne}
                      className="block w-full"
                      alt="diving_photo"
                  />
              </div>
              <div className="carousel-item relative float-left w-full">
                  <h1 className="absolute sm:top-1/2 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
                  <h2 className="absolute sm:top-1/2 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
                  <button className="hidden md:block absolute top-3/4 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><a className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" href="/">WHO WE ARE</a></button>
                  <img
                      src={slideTwo}
                      className="block w-full"
                      alt="diving_photo"
                  />
              </div>
              <div className="carousel-item relative float-left w-full">
                  <h1 className="absolute sm:top-1/2 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
                  <h2 className="absolute sm:top-1/2 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
                  <button className="hidden md:block absolute top-3/4 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><a className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" href="/">WHO WE ARE</a></button>
                  <img
                      src={slideThree}
                      className="block w-full"
                      alt="diving_photo"
                  />
              </div>
              <div className="carousel-item relative float-left w-full">
                  <h1 className="absolute sm:top-1/2 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
                  <h2 className="absolute sm:top-1/2 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
                  <button className="hidden md:block absolute top-3/4 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><a className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" href="/">WHO WE ARE</a></button>
                  <img
                      src={slideFour}
                      className="block w-full"
                      alt="diving_photo"
                  />
              </div>
          </div>
      </div>
  )
}
