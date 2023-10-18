import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import Accordion from '../../components/accordion';
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
  padding:1rem;
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
display:flex;
flex-direction:column;
  grid-area: location;
`;

const HostArea = styled.div`
display:flex;
grid-area: host;
justify-content:end;
align-self:start;
`;

const TagsArea = styled.div`
  grid-area: tags;
`;

const RatingArea = styled.div`
display:flex;
grid-area: rating;
justify-content: end;
@media (max-width: 768px) {
  justify-content: start;

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
  margin:0px;
  color: ${colors.primary};
`;

const LodgementPTag = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.primary};
  padding: 0px;
  margin-top: 0px;
`;

const Lodgement = () => {
  const { id } = useParams();
  const [lodgementData, setLodgementData] = useState(null);

  useEffect(() => {
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
