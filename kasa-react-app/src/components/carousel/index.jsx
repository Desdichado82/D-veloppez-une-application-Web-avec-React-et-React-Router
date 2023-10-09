import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@fontsource/montserrat';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center; /* Center the content */
`;

const CarouselSlide = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;
const NavigationOverlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
/* background-color: rgba(0, 0, 0, 0.6); */
padding: 10px;
box-sizing: border-box;
bottom: 0;

`;

const CarouselNavigation = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;

const SlideNumberOverlay = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0; /* Position at the bottom */
`;

const CarouselSlideNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const SlideNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CarouselButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  outline: none;
  margin: 0 10px;
`;

const Carousel = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => clearInterval(autoPlayInterval);
  }, [interval]);

  return (
    <CarouselContainer>
    <CarouselSlide>
      <CarouselImage src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      {images.length > 1 && ( // Check if there are more than one image
        <NavigationOverlay>
          <CarouselNavigation>
            <CarouselButton onClick={prevSlide}>
              <i className="material-icons">keyboard_arrow_left</i>
            </CarouselButton>
  
            <CarouselButton onClick={nextSlide}>
              <i className="material-icons">keyboard_arrow_right</i>
            </CarouselButton>
          </CarouselNavigation>
        </NavigationOverlay>
      )}
      {images.length > 1 && ( // Check if there are more than one image
      <SlideNumberOverlay>
        <SlideNumberContainer>
          <CarouselSlideNumber>{`${currentSlide + 1}/${images.length}`}</CarouselSlideNumber>
        </SlideNumberContainer>
      </SlideNumberOverlay>
      )}
    </CarouselSlide>
  </CarouselContainer>
  );
};

export default Carousel;

