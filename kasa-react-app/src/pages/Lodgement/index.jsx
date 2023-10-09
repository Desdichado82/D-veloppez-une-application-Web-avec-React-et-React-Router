import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Accordian from '../../components/accordian';
import Carousel from '../../components/carousel';

// Import the JSON data directly
import jsonData from '../../json/kasa_data.json'; // Adjust the path as needed

const LodgementPage = styled.div`
  background-color: ${colors.backgroundLight};
  padding: 20px;
`;

const LodgementContent = styled.div`

  padding: 20px;
  background-color: white;

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

  return (
    <LodgementPage>
      <LodgementContent>
      <Carousel images={lodgementData.pictures} coverUrl={lodgementData.cover} />
        <h1>{lodgementData.title}</h1>
        <Accordian sections={[{ title: 'Description', content: lodgementData.description }]} />
        <div>
 
</div>
        {/* Add other details or components as needed */}
      </LodgementContent>
    </LodgementPage>
  );
};

export default Lodgement;
