import React from 'react';
import styled from 'styled-components';
import "@fontsource/montserrat";

const CardWrapper = styled.div`
  display:flex;
  justify-content : flex start;
  align-items: flex-end;
  background-image: linear-gradient(to bottom, #ff6060, #f85d5d, #f15b5b, #ea5858, #e35656, #da5252, #d04f4f, #c74b4b, #b94545, #ac3f3f, #9e3a3a, #913434);
  border-radius:10px;
  padding: 20px;
  height:240px;
  margin: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  text-align: left;
  @media (max-width: 768px) {
    height: 240px; /* Adjust the height for smaller screens */
  }
  
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  color:white;
  font-family: 'Montserrat', sans-serif;
`;

const Card = ({ id, title, onClick }) => {
    const handleClick = () => {
      console.log('Card clicked');
      if (onClick) {
        onClick(id);
      }
    };
  
    return (
      <CardWrapper onClick={handleClick}>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    );
  };
  
  export default Card;
