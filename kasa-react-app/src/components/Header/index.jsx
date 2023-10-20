// Import necessary modules and components
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import HeaderLogo from '../../assets/kasalogoHeader.png';
import "@fontsource/montserrat";

// Styled component for the header container
const KasaHeader = styled.header`
  background-color: ${colors.backgroundLight};
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid transparent; // Add an initially transparent border

  /* Media query for smaller screens (e.g., mobile devices) */
  @media (max-width: 768px) {
    flex-direction: row; // Stack elements vertically
    align-items: flex-start; // Align navigation links to the start
  }
`;

// Styled component for the Kasa logo in the header
const KasaLogoHeader = styled.img`
  width: 210.32px;
  height: 68px;
  @media (max-width: 768px) {
    width: 145px;
    height: 46.88px;
  }
`;

// Styled component for the navigation links in the header
const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #ff6060ff;
        text-decoration: none;
        border-bottom: 2px solid transparent; // Add an initially transparent border bottom
        transition: border-bottom 0.2s; // Add a smooth transition effect on hover

        &:hover,
        &:active {
          border-bottom: 2px solid #ff6060ff; // Show the border bottom on hover
        }
      }
    }
  }
`;

// Functional component for the header
const Header = () => {
  return (
    <KasaHeader>
      <Link to="/">
        <KasaLogoHeader src={HeaderLogo} alt="Kasa Logo" />
      </Link>

      <Nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link> {/* Home link */}
          </li>
          <li>
            <Link to="/Propos">À propos</Link> {/* About link */}
          </li>
        </ul>
      </Nav>
    </KasaHeader>
  );
}

// Export the Header component
export default Header;

/*
This script defines a React component called Header for rendering the website header.
It uses styled components to define the styling for the header, logo, and navigation links.
The header contains the Kasa logo and navigation links, which are styled to be responsive for both desktop and mobile screens.
The header includes links to the home page ("Accueil") and the about page ("À propos").
It also includes hover effects for the navigation links.
*/