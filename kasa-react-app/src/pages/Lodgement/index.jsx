import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Accordion from '../../components/accordion';
import Carousel from '../../components/carousel';
import HostInfo from '../../components/HostInfo'; // Import the HostInfo component
import Rating from '../../components/Rating'; // Import the StarRating component
import Tags from '../../components/Tags'; // Import the Tags component

// Import the JSON data directly
import jsonData from '../../json/kasa_data.json'; // Adjust the path as needed

const LodgementPage = styled.main`
  background-color: ${colors.backgroundLight};
  padding: 20px;
`;



const LodgementContent = styled.div`

background-color: ${colors.backgroundLight};

`;


const Column = styled.div`
// Add styles here
display:flex;

`;

const Row = styled.div`
// Add styles here
display:flex;
justify-content:space-between;
gap:1rem;
margin:1rem;


`;

const Lodgement = () => {
  const { id } = useParams();
  const [lodgementData, setLodgementData] = useState(null);


  useEffect(() => {
    // Find the selected lodgement based on the 'id' parameter
    const selectedLodgement = jsonData.find((item) => item.id === id);

    if (selectedLodgement) {
      setLodgementData(selectedLodgement);
    } else {
      console.error('Error: Lodgement not found');
    }
  }, [id]);

  if (!lodgementData) {
    return <div>Loading...</div>;
  }

  const descriptionSection = [
    {
      title: 'Description',
      content: 
        lodgementData.description,
      
    },
  ];
  
  const equipmentsSection = [
    {
      title: 'Equipments',
      content: lodgementData.equipments,
      // Add more sections related to amenities
    },
  ];

  return (
    <LodgementPage>
      <LodgementContent>
      <Carousel images={lodgementData.pictures} coverUrl={lodgementData.cover} />
        <Row>
        <h1>{lodgementData.title}</h1>
        <HostInfo hostData={lodgementData.host} /> 
        </Row>
        <Row>
        <Tags tags={lodgementData.tags} />
        <Rating rating={lodgementData.rating} /> 
        </Row>
       <Row>
       <Accordion sections={descriptionSection} />
       <Accordion sections={ equipmentsSection} />
       </Row>
       
        {/* Add other details or components as needed */}
      </LodgementContent>
    </LodgementPage>
  );
};

export default Lodgement;
