import React from 'react';
import { CloseOutline } from 'react-ionicons';

export const ImagePopup = ({ src, modal, toggleModal }) => {

  const handleChange = () => {
    toggleModal(!modal);
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 z-30">
      {
        modal && (
          <div className="relative bg-white flex justify-center items-center p-4 rounded z-20">
            <img
              src={src}
              alt="diving_photo"
            >
            </img>
            <div className="absolute top-5 right-5 cursor-pointer border-solid border-2 border-red-500 bg-red-500 duration-500 rounded z-20">
              <CloseOutline onClick={handleChange} />
            </div>
          </div>
        )
      }
    </div>
  )
}
