import React, { useState } from 'react';
import { ArrowUp } from 'react-ionicons';

export const ScrollButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="relative">
      <div onClick={scrollToTop} id="ScrollButton" className={`fixed bottom-7 right-7 bg-transparent border-solid border-2 border-yellow-500 hover:bg-yellow-500 rounded-md p-3 hover:cursor-pointer transform hover:-translate-y-0.5 focus:outline-none z-20 duration-500 ${visible ? 'inline' : 'hidden'}`}>
        <ArrowUp />
      </div>
    </div>
  )
}
