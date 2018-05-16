import React from "react";
import * as styles from "./styles";
import Carousel from 'nuka-carousel';
import {FaArrowCircleLeft,  FaArrowCircleRight } from 'react-icons/lib/fa/';

class CarouselBookDecorated extends React.Component {
  render() {
    const { children, ...restProps } = this.props;
    const countShowSlide = 6;
    return (
      <styles.CarouselWrapper {...restProps}>
        <Carousel
          cellAlign="left"
          dragging={false}
          wrapAround={true}
          framePadding="5px 0px 20px 55px"
          slidesToShow={countShowSlide}
          slideIndex={0}
          renderCenterLeftControls={({ previousSlide, nextSlide, goToSlide, currentSlide, slideCount }) => {
            return (
              <FaArrowCircleLeft onClick={currentSlide === 0 ? () => goToSlide(slideCount - countShowSlide) : previousSlide} size={60} color="#28A9E0"/>
            )
          }}
          renderCenterRightControls={({ previousSlide, nextSlide, goToSlide, currentSlide, slideCount }) => {
            console.log("currentSlide",currentSlide);
            return (
              <FaArrowCircleRight onClick={currentSlide === slideCount - countShowSlide ? () => goToSlide(0) : nextSlide} size={60} color="#28A9E0"/>
            )
          }}
          renderBottomCenterControls={({ currentSlide }) => (
            null
          )}
        >
          {children}
        </Carousel>
      </styles.CarouselWrapper>
    );
  }
}

export default CarouselBookDecorated;
