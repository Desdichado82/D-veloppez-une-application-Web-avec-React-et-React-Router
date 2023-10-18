import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import "@fontsource/montserrat";

// Container for the 404 error page
const KasaFourZeroFourContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh; /* Set a height for the container */
`;

// Large heading for the 404 error
const KasaFourZeroFourHtag = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 10rem;
  color: ${colors.primary};

  /* Media query for smaller screens (e.g., mobile devices) */
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

// Text description for the 404 error
const KasaFourZeroFourText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: ${colors.primary};
`;

// Link to return to the homepage
const KasaFourZeroFourLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: ${colors.primary};
  text-decoration: none; /* Remove underline from the link */
`;

function Error() {
  return (
    <KasaFourZeroFourContainer>
      <KasaFourZeroFourHtag>404</KasaFourZeroFourHtag>
      <KasaFourZeroFourText>Oups! La page que vous demandez n&apos;existe pas.</KasaFourZeroFourText>

      <KasaFourZeroFourLink to="/">Retourner sur la page d’accueil</KasaFourZeroFourLink>
    </KasaFourZeroFourContainer>
  );
}

export default Error;

/*
This script defines a React component for a 404 error page.
It uses styled-components to style various elements, including the container, heading, text, and a link to return to the homepage.
*/