import React from 'react';
import { Header } from '../Header/Header';
import { Carousel } from '../Carousel/Carousel';
import { ScrollButton } from '../ScrollButton/ScrollButton';
import { ShowImages } from '../ShowImages/ShowImages';
import { Content } from '../Content/Content';
import { WhatToDo } from '../WhatToDo/WhatToDo';

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ShowImages />
      <Content />
      <WhatToDo />
      <ScrollButton />
    </>
  )
}
