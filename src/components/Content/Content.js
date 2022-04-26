import React, { useState } from 'react';
import { VideoPopup } from '../VideoPopup/VideoPopup';
import coverImage from './Images/cover_image.jpg';
import iconImage from './Images/icon_image.png';

export const Content = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="bg-gray-800 relative">
      <div className="grid md:grid-cols-2">
        <div className="my-20 md:my-64 md:ml-40">
          <img className="px-2 md:pl-0" src={iconImage} alt="beach_icons"/>
          <h3 className="text-yellow-500 px-4 md:pl-0 my-2 text-5xl">Hello</h3>
          <div className="container mx-auto px-4 md:pl-0"><hr className="w-full h-1 text-white"/></div>
          <h6 className="text-white px-4 md:pl-0 mt-20 mb-3 text-2xl">Welcome!</h6>
          <p
            className="text-gray-400 px-4 md:pl-0"
          >
            Welcome to Crazy Dolphin Aqua and Diving Center! We are the team of like-minded professionals,offering you a full range
            of diving trips and courses, snorkeling and watersport activities.<br/>
            For many years, thousands of visitors have been delighted by the service, provided by our diving center.<br/>
            Here we don't say goodbyes, we just say See you later.
          </p>
        </div>
        <div className="px-4 md:px-0 pb-56">
          <div className="overflow-hidden relative cursor-pointer">
            <img
              onClick={toggleModal}
              className="w-full h-full cursor-pointer duration-500 scale-100 ease-in-out hover:scale-110 relative z-10 hover:z-[5]"
              src={coverImage}
              alt="cover_image_for_video"
            >
            </img>
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white p-4 rounded-3xl z-[5] duration-500"
              src="https://img.icons8.com/ios/50/000000/documentary.png"
              alt="video_icon"
            />
          </div>
          <VideoPopup modal={modal} toggleModal={toggleModal} />
        </div>
      </div>
      <hr className="w-full h1 text-white absolute bottom-12 md:bottom-56" />
      {
        modal && (
          <div id="overlay" onClick={toggleModal} className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-20"></div>
        )
      }
    </div>
  )
}
