import React from "react";
import * as styles from "./styles";
import Carousel from 'nuka-carousel';
import {FaArrowLeft,  FaArrowRight } from 'react-icons/lib/fa/';

const CarouselPromoDecorated = ({ children, ...restProps }) => (
  <styles.CarouselWrapper {...restProps}>
      <Carousel
          cellAlign="left"
          dragging={false}
          wrapAround={true}
          framePadding="0px 0px 0px 0px"
          slideWidth={1}
          renderCenterLeftControls={({ previousSlide, slideCount, currentSlide }) => {
              return <styles.ArrowWrapper><FaArrowLeft onClick={previousSlide} size={50} color="#f0f0f0"/></styles.ArrowWrapper>
            }
          }
          renderCenterRightControls={({nextSlide, slideCount, currentSlide}) => {
              return <styles.ArrowWrapper><FaArrowRight onClick={nextSlide} size={50} color="#f0f0f0"/></styles.ArrowWrapper>
            }
          }
      >
            {children}
      </Carousel>
  </styles.CarouselWrapper>
);

export default CarouselPromoDecorated;
