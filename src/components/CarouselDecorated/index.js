import React from "react";
import * as styles from "./styles";
import Carousel from 'nuka-carousel';
import {FaArrowCircleLeft,  FaArrowCircleRight } from 'react-icons/lib/fa/';

const CarouselDecorated = ({ children, ...restProps }) => (
  <styles.CarouselWrapper {...restProps}>
      <Carousel
          cellAlign="left"
          dragging={false}
          wrapAround={false}
          framePadding="5px 0px 20px 55px"
          slidesToShow={5}
          slideIndex={0}
          renderCenterLeftControls={({ previousSlide }) => (
              <FaArrowCircleLeft onClick={previousSlide} size={60} color="#28A9E0"/>
          )}
          renderCenterRightControls={({ nextSlide }) => (
              <FaArrowCircleRight onClick={nextSlide} size={60} color="#28A9E0"/>
          )}
          renderBottomCenterControls={({ currentSlide }) => (
              null
          )}
      >
            {children}
      </Carousel>
  </styles.CarouselWrapper>
);

export default CarouselDecorated;
