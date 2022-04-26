import React from 'react';
import { CloseOutline } from 'react-ionicons';
import video from '../../video.MP4';

export const VideoPopup = ({ modal, toggleModal }) => {
  const handleChange = () => {
    toggleModal(!modal);
  }

  return (
    <div className="w-3/4 md:w-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 z-30">
      {
        modal && (
          <div className="relative bg-white flex justify-center items-center p-4 rounded z-20">
            <video
              className="hover:cursor-pointer md:my-16"
              width="1025"
              height="1262"
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-5 right-5 cursor-pointer border-solid border-2 border-red-500 bg-red-500 duration-500 rounded z-20">
              <CloseOutline onClick={handleChange} />
            </div>
          </div>
        )
      }
    </div>
  )
}
