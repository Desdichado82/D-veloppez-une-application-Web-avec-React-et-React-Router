import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import styled from 'styled-components';
import '@fontsource/montserrat';

// Create a styled component for the carousel container
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center; /* Center the content */
`;

// Create a styled component for an individual carousel slide
const CarouselSlide = styled.div`
  position: relative;
  overflow: hidden;
`;

// Create a styled component for the carousel image
const CarouselImage = styled.img`
  width: 100%;
  height: 415px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 255px; /* Adjust the height for smaller screens */
  }
`;

// Create a styled component for the navigation overlay
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

// Create a styled component for the carousel navigation
const CarouselNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Added this line */
  width: 100%;
`;

// Create a styled component for the slide number overlay
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

// Create a styled component for the carousel slide number
const CarouselSlideNumber = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

// Create a styled component for the slide number container
const SlideNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Create a styled component for the carousel buttons
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

// Create a styled component for the image overlay
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 415px;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust the alpha value here */

  @media (max-width: 768px) {
    max-height: 255px;
  }
`;

// Create the Carousel component
const Carousel = ({ images, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    // Automatically move to the next slide at a specified interval
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => clearInterval(autoPlayInterval);
  }, [interval]);

  return (
    <CarouselContainer>
      <CarouselSlide>
        <CarouselImage src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <ImageOverlay />

        {/* Render navigation overlay only when there are multiple images */}
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

        {/* Render slide number overlay only when there are multiple images */}
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

// Define prop types for the Carousel component
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs
  interval: PropTypes.number, // Autoplay interval in milliseconds (optional)
};

export default Carousel;


/*
this code creates a flexible and customizable image carousel component that can be easily integrated into React applications. 
It provides a user-friendly interface for cycling through images, whether manually or automatically, and includes navigation
 and slide number indicators for enhanced user experience.
*/


