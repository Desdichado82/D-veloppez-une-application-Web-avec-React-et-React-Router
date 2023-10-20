// Import necessary modules and components
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import "@fontsource/montserrat";
import Card from '../../components/Card';
import HomeBannerImg from '../../assets/homeBanner.png';

// Styled components for styling
const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.backgroundGrey};
`;

const HomeBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${HomeBannerImg});
  background-size: cover;
  background-position: center center;
  height: 224px;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const HomeBannerText = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin:1rem;
  font-size: 2rem;
  color: white;
  font-weight: 500;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 1rem;
  background-color: ${colors.backgroundGrey};
  padding: 2rem;
  padding-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Define the path to the JSON data file
const dataPath = new URL('../../json/kasa_data.json', import.meta.url).pathname;

const Home = () => {
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch JSON data using the Fetch API
    fetch(dataPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCardClick = (id) => {
    console.log(`Navigating to /lodgement/${id}`);
    navigate(`/lodgement/${id}`);
  };

  return (
    <div>
      <HomePage>
        <HomeBanner>
          <HomeBannerText>
            Chez vous,&nbsp; Partout et ailleurs
          </HomeBannerText>
        </HomeBanner>
        <Gallery>
          {jsonData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </Gallery>
      </HomePage>
    </div>
  );
};



// Export the Home component
export default Home;

/*
This code represents the homepage of the application.
 It fetches JSON data, displays a banner with a greeting, and populates a gallery of cards based on the retrieved data.
 Users can click on a card to view more details about a lodging. 
The code demonstrates the use of React Hooks and navigation within a React application
*/

/**
 
Data Path: The dataPath constant is defined to store the path to a JSON data file. 
This path is calculated relative to the current module's URL using the URL constructor.

Component Setup: The Home component is created as a functional component.

React Hooks: The component utilizes React Hooks, such as useState, useEffect, and useNavigate, for state management,
 handling side effects, and navigation.

Data Fetching: Inside the useEffect hook, a fetch request is made to the specified dataPath to retrieve JSON data.
 If the network request is successful (response.ok), the JSON data is parsed and stored in the component's state using the setJsonData function.

Card Click Handler: The handleCardClick function is defined to handle the click event on a card. 
When a card is clicked, this function navigates to a detailed view of the corresponding lodging. It uses the navigate function from the useNavigate hook to change the URL to /lodgement/:id, where :id is the unique identifier of the lodging.

Rendering: The Home component renders the following elements:

A home page container (HomePage).
A banner with text.
A gallery (Gallery) that maps over the JSON data and displays a series of cards. Each card is created using the Card component and is associated with a specific lodging. When a card is clicked, the handleCardClick function is called to navigate to the lodging's detailed view.

*/
