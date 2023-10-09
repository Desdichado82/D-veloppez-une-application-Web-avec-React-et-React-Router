import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import FooterLogo from '../../assets/kasalogoFooter.png'
import "@fontsource/montserrat";


const KasaFooter = styled.footer`
background-color: ${colors.secondary};
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin-bottom:0px;
`

const KasaLogoFooter = styled.img`
width: 122px;
height: 39.44px;
margin-top:66px;


`

const KasaCopyright = styled.p`
font-family: 'Montserrat', sans-serif;
font-size:1.5rem;
color:white;
text-align:center;
line-height:34.22px;
`

function Footer(){
    return(
        <>
           <KasaFooter>
                <KasaLogoFooter src={FooterLogo}></KasaLogoFooter>
                <KasaCopyright>© 2020 Kasa. All rights reserved</KasaCopyright>
           </KasaFooter>
        </>
    )
}

export default Footer