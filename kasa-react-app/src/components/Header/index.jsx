import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';
import HeaderLogo from '../../assets/kasalogoHeader.png';
import "@fontsource/montserrat";

const KasaHeader = styled.header`
  background-color: ${colors.backgroundLight};
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const KasaLogoHeader = styled.img`
  width: 210.32px;
  height: 68px;
`;

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
      a{
        color: #ff6060ff;
        text-decoration:none;
      }
    }
  }
`;

const Header = ()=> {
  return (
    <KasaHeader>
      <Link to="/">
      <KasaLogoHeader src={HeaderLogo} alt="Kasa Logo" />
      </Link>
     
      <Nav>
        <ul>
          <li>
            <Link to="/">Accuiel</Link>
          </li>
          <li>
            <Link to="/Propos">À propos</Link>
          </li>
        </ul>
      </Nav>
    </KasaHeader>
  );
}

export default Header;
