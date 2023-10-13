import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import "@fontsource/montserrat";

const KasaFourZeroFourContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; /* Add this line */
  align-items: center; /* Add this line */
  text-align: center; /* Add this line */
  height: 100vh; /* Set a height for the container */
`;

const KasaFourZeroFourHtag = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 10rem;
  color: ${colors.primary};
`;

const KasaFourZeroFourText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: ${colors.primary};
`;

const KasaFourZeroFourLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: ${colors.primary};
  text-decoration: none; /* Add this line to remove underline */
`;

function Error() {
  return (
    <KasaFourZeroFourContainer>
      <KasaFourZeroFourHtag>404</KasaFourZeroFourHtag>
      <KasaFourZeroFourText>Oups! La page que vous demandez n'existe pas.</KasaFourZeroFourText>
      <KasaFourZeroFourLink to="/">Retourner sur la page d’accueil</KasaFourZeroFourLink>
    </KasaFourZeroFourContainer>
  );
}

export default Error;
