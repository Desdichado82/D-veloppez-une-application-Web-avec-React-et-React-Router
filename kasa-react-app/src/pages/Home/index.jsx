import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors'
import "@fontsource/montserrat";
import Card from '../../components/Card'
import HomeBannerImg from '../../assets/homeBanner.png'



const HomePage =  styled.main`
display:flex;
flex-direction:column;
background-color:${colors.backgroundLight};


`

const HomeBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure the parent div is a positioned container */
  background-image: url(${HomeBannerImg});
  background-size: cover;
  background-position: center center;
  height:224px;
  border-radius:10px;
  /* Other styles */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius:10px;
    background: rgba(0, 0, 0, 0.4); /* Adjust the color and transparency as needed */
  }
`;


const HomeBannerText =  styled.p`

font-family: 'Montserrat', sans-serif;
font-size:2rem;
color:white;
font-weight:500;
position: relative;
  z-index: 1; /* Ensure the text is above the overlay */

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
              <HomeBanner>
                <HomeBannerText>
                Chez vous, Partout et ailleurs
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
    )
}


export default Home