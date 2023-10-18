import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '@fontsource/montserrat';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center; /* Center the content */
  
`;

const CarouselSlide = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 255px;
  
  }
`;

const NavigationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Changed space-around to space-between */
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0;
`;

const CarouselNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Added this line */
  width: 100%;
`;

const SlideNumberOverlay = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0;
`;

const CarouselSlideNumber = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
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
  color: white;
  outline: none;
  margin: 0 10px;
  i {
    font-size: 4rem; /* Increased font size to 2rem for the material icons */
  }

  @media (max-width: 768px) {
    i {
      font-size: 2rem; /* Increased font size to 2rem for the material icons */
    }
  
  }

  
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height:415px;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the alpha value here */
  @media (max-width: 768px) {
    max-height:255px;
  
  }
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
        <ImageOverlay />
        {images.length > 1 && (
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
        {images.length > 1 && (
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

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default Carousel;


