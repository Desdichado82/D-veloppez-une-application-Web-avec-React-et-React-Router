
import Accordion from '../../components/accordion';
import styled from 'styled-components';
import colors from '../../utils/styles/colors'
import "@fontsource/montserrat";
import ProposBannerImg from '../../assets/proposBanner.png';





const Propose =()=>{
  //Define sections for each topic

  const ProposPage = styled.main`
  display: flex;
  flex-direction:column;
  justify-content: center;
  padding:1rem;
  background-color:${colors.backgroundLight};
`;

  const ProposBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure the parent div is a positioned container */
  background-image: url(${ProposBannerImg});
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


const ProposBannerText =  styled.p`

font-family: 'Montserrat', sans-serif;
font-size:2rem;
color:white;
font-weight:500;
position: relative;
  z-index: 1; /* Ensure the text is above the overlay */

`

const Column =  styled.div`

display:flex;
flex-direction:column;
gap:1rem;
margin:1rem;
padding:1rem;
justify-content:center;


`

  const disclaimerSections =[
    {
      title:'Flabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
    // Add more sections related to security
  ];

  const respectSections =[
    {
      title: 'Respect ',
      content:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.'
    }
  ];

  const serviceSections =[
    {
      title: 'Service ',
      content:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    }
  ];


  const securitySections =[
    {
      title:'Sécurité',
      content: 'La sécurite est la priorite de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
  },
    // Add more sections related to security
  ];

  return(
   <ProposPage>
        <ProposBanner>
                <ProposBannerText>
               
                </ProposBannerText>
              
      </ProposBanner>
    <Column>
    <Accordion sections={disclaimerSections} />
      <Accordion sections={respectSections} />
      <Accordion sections={serviceSections} />
      <Accordion sections={securitySections} />
    </Column>
   </ProposPage> 
  
      
     
  
  )

}

export default Propose