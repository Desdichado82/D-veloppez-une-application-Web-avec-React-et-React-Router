import React, { useState } from 'react';
import styled from 'styled-components';


const AccordianContainer = styled.div`
// add styles here 
`;

const Section = styled.div`
// add styles here 
font-family: 'Montserrat', sans-serif;
`;

const SectionTitle = styled.div`
// add styles here 
cursor:pointer
font-family: 'Montserrat', sans-serif;
`;

const SectionContent = styled.div`
// Add styles for section content here
display: ${(props) => (props.isOpen ? 'block' : 'none')}`;

function Accordian({sections}){
    const[openSections, setOpenSections] = useState({});

    const toggleSection = (sectionIndex) =>{
        setOpenSections((prevState)=>({
            ...prevState,
            [sectionIndex]: !prevState[sectionIndex],

        }));
    };

    return(
        <AccordianContainer>
            {sections.map((section,index)=>(
                <Section key={index}>
                    <SectionTitle onClick={()=> toggleSection(index)}>{section.title}</SectionTitle>
                    <SectionContent isOpen={openSections[index]}>{section.content}</SectionContent>
                </Section>
            ))}
        </AccordianContainer>
    )
}

export default Accordian;