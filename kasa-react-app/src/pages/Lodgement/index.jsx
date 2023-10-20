import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Accordion from '../../components/accordion'; // Correct the import
import Carousel from '../../components/carousel';
import HostInfo from '../../components/HostInfo';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';

import jsonData from '../../json/kasa_data.json';

const LodgementPage = styled.main`
  background-color: ${colors.backgroundLight};
  padding: 20px;
`;

const LodgementContent = styled.div`
  background-color: ${colors.backgroundLight};
`;

const Grid = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-areas:
    'location host'
    'tags rating';

  @media (max-width: 768px) {
    grid-template-areas:
      'location location'
      'tags tags'
      'rating host';
  }
`;

const LocationArea = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: location;
`;

const HostArea = styled.div`
  display: flex;
  grid-area: host;
  justify-content: flex-end; // Fix the value
  align-self: flex-start; // Fix the value
`;

const TagsArea = styled.div`
  grid-area: tags;
`;

const RatingArea = styled.div`
  display: flex;
  grid-area: rating;
  justify-content: flex-end; // Fix the value

  @media (max-width: 768px) {
    justify-content: flex-start; // Fix the value
  }
`;

const RowAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LodgementHTag = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  color: ${colors.primary};
`;

const LodgementPTag = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.primary};
  padding: 0;
  margin-top: 0;
`;

const Lodgement = () => {
  const { id } = useParams();
  const [lodgementData, setLodgementData] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook


  useEffect(() => {
    const selectedLodgement = jsonData.find((item) => item.id === id);

    if (selectedLodgement) {
      setLodgementData(selectedLodgement);
    } else {
      // Redirect to an error page if the Lodgement is not found
     // Redirect to an error page if the Lodgement is not found
     navigate('/error');
    }
  }, [id, navigate]);

  if (!lodgementData) {
    return <div>Loading...</div>;
  }

  const descriptionSection = [
    {
      title: 'Description',
      content: lodgementData.description,
    },
  ];

  const equipmentsSection = [
    {
      title: 'Equipments',
      content: lodgementData.equipments,
    },
  ];

  return (
    <LodgementPage>
      <LodgementContent>
        <Carousel images={lodgementData.pictures} coverUrl={lodgementData.cover} />
        <Grid>
          <LocationArea>
            <LodgementHTag>{lodgementData.title}</LodgementHTag>
            <LodgementPTag>{lodgementData.location}</LodgementPTag>
          </LocationArea>
          <HostArea>
            <HostInfo hostData={lodgementData.host} />
          </HostArea>
          <TagsArea>
            <Tags tags={lodgementData.tags} />
          </TagsArea>
          <RatingArea>
            <Rating rating={lodgementData.rating} />
          </RatingArea>
        </Grid>
        <RowAccordion>
          <Accordion sections={descriptionSection} />
          <Accordion sections={equipmentsSection} />
        </RowAccordion>
      </LodgementContent>
    </LodgementPage>
  );
};

export default Lodgement;


/*
This script defines a React component for a "Lodgement" page, which displays information about accommodations.
It fetches data based on the route parameter using the useParams hook and renders the details of the selected lodgement.
The component utilizes styled components for styling and lays out the content in a grid-based structure.
It includes a carousel, host information, tags, and a rating component.
The description and equipment information are displayed in an Accordion component.
If the lodgement data is not available, it displays a "Loading..." message.

*/

