import styled from 'styled-components';
import "@fontsource/montserrat";

// Define a styled component for the card wrapper
const CardWrapper = styled.div`
  display: flex; // Display children elements in a row
  justify-content: flex-start; // Align items to the start of the row
  align-items: flex-end; // Align items to the bottom of the row
  background-image: linear-gradient(to bottom, #ff6060, #f85d5d, #f15b5b, #ea5858, #e35656, #da5252, #d04f4f, #c74b4b, #b94545, #ac3f3f, #9e3a3a, #913434); // Apply a gradient background
  border-radius: 10px; // Add border radius
  padding: 20px; // Add padding
  height: 240px; // Set the height
  margin: 10px; // Add margin
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); // Add a box shadow
  text-align: left; // Align text to the left
  @media (max-width: 768px) {
    max-width: 335px; // Set the maximum width for smaller screens
    height: 240px; // Adjust the height for smaller screens
  }
`;

// Define a styled component for the card title
const CardTitle = styled.h2`
  font-size: 1rem; // Set the font size
  margin: 0; // Remove margin
  color: white; // Set text color to white
  font-family: 'Montserrat', sans-serif; // Set the font family
  font-weight: 500; // Set the font weight
`;

// Define the Card component
const Card = ({ id, title, onClick }) => {
  // Function to handle card click
  const handleClick = () => {
   
    if (onClick) {
      onClick(id); // Call the onClick function with the card's ID if provided
    }
  };

  // Render the card with the specified title
  return (
    <CardWrapper onClick={handleClick}>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};



export default Card;

/*
This code defines a React component called Card, which represents a card element with a title.
The card is styled using styled-components to have a gradient background, rounded corners, and other visual properties.
The component accepts id, title, and onClick as props, and it logs a message to the console when the card is clicked.
*/


/*Note: In React functional components, you don't need to specify PropTypes for internal variables like 
jsonData, handleCardClick, and navigate. PropTypes are generally used for props passed to the component.
*/