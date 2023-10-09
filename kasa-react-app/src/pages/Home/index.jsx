import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors'
import "@fontsource/montserrat";
import Card from '../../components/Card'


const HomePage =  styled.main`
display:flex;
flex-direction:column;
background-color:${colors.backgroundLight};


`

const Gallery =  styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
justify-content:center;
gap:1rem;
background-color:${colors.backgroundGrey};
padding:2rem;
padding-top:60px;
/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr); /* Change to 1 column for smaller screens */
}
`
const dataPath = new URL('../../json/kasa_data.json', import.meta.url).pathname;
const Home = ()=>{
    const navigate = useNavigate(); // Use useNavigate to get the navigation function
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        // Fetch JSON data using the Fetch API
        fetch(dataPath) // Replace with the actual path to your JSON file
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Update 'jsonData' state with the fetched data
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

    return(
        <div>
            <HomePage>
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
    )
}


export default Home