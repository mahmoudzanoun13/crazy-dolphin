import React, { useState } from 'react';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import slideOne from './Images/image_1.jpg';
import slideTwo from './Images/image_2.jpg';
import slideThree from './Images/image_3.jpg';
import slideFour from './Images/image_4.jpg';
import slideFive from './Images/image_5.jpg';
import slideSix from './Images/image_6.jpg';
import slideSeven from './Images/image_7.jpg';
import slideEight from './Images/image_8.jpg';

export const ShowImages = () => {
  const srcs = [
    {link: slideOne},
    {link: slideTwo},
    {link: slideThree},
    {link: slideFour},
    {link: slideFive},
    {link: slideSix},
    {link: slideSeven},
    {link: slideEight},
  ];
  const [modal, setModal] = useState(false);

  const toggleModal = (link) => {
    console.log(link);
    setModal(!modal);
  }

  return (
    <>
      <div id="images" className="mt-28 md:grid md:grid-cols-4 bg-gray-800">
        {
          srcs.map(src => (
            <div key={src.link}>
              <img
                onClick={() => toggleModal(src.link)}
                src={src.link}
                className="w-full h-auto grayscale hover:grayscale-0 cursor-pointer duration-500 scale-100 ease-in-out hover:scale-110 md:p-5"
                alt="diving_photo"
              >
              </img>
              <ImagePopup src={src.link} modal={modal} toggleModal={toggleModal} />
            </div>
          ))
        }
      </div>
      <div className="w-full h-16 bg-rose-500 hover:bg-yellow-500 duration-500"></div>
      {
        // modal && (
        //   <div id="overlay" onClick={toggleModal} className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-20"></div>
        // )
      }
    </>
  )
}
