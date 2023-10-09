//import { Link } from 'react-router-dom'
//import styled from 'styled-components'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import HeaderLogo from '../../assets/kasalogoHeader.png'
import "@fontsource/montserrat";

const KasaHeader = styled.header`
background-color: ${colors.backgroundLight};
font-family: 'Montserrat', sans-serif;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:1rem;
`

const KasaLogoHeader = styled.img`
width: 210.32px;
height: 68px;

`


function Header() {
  return (
    <>
     <KasaHeader>
        <KasaLogoHeader src={HeaderLogo}></KasaLogoHeader>
        <nav>
            <li>home</li>
            <li>services</li>
        </nav>
     </KasaHeader>
    </>
  )
}

export default Header