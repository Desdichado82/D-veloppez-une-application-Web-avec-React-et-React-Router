import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import "@fontsource/montserrat";
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem;
 
`;

const RowAccordion = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
margin: 1rem;
@media (max-width: 768px) {
  flex-direction:column;
}
`;

const LodgementHTag = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size:2rem;
font-weight:500;
color:${colors.primary};
`;

const LodgementPTag = styled.p`
font-family: 'Montserrat', sans-serif;
font-size:1rem;
font-weight:500;
color:${colors.primary};
padding:0px;
margin-top:0px;
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
        <Row>
          <div>
          <LodgementHTag>{lodgementData.title}</LodgementHTag>
          <LodgementPTag>{lodgementData.location}</LodgementPTag>
          </div>
          
          <HostInfo hostData={lodgementData.host} />
        </Row>
        <Row>
          <Tags tags={lodgementData.tags} />
          <Rating rating={lodgementData.rating} />
        </Row>
        <RowAccordion>
          <Accordion sections={descriptionSection} />
          <Accordion sections={equipmentsSection} />
        </RowAccordion>
      </LodgementContent>
    </LodgementPage>
  );
};

export default Lodgement;

