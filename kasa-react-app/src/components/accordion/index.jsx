import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp,FaChevronDown  } from 'react-icons/fa';
import colors from '../../utils/styles/colors';

const AccordionContainer = styled.div`
  // Add styles here
  
  width:100%;
  display:flex;
  
 
`;



const Section = styled.div`
  // Add styles here
  font-family: 'Montserrat', sans-serif;
  width:100%;

 
`;

const SectionTitle = styled.div`
  // Add styles here
 
  display:flex;
  justify-content:space-between;
  padding:5px;
  cursor: pointer;
  border-radius:5px;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  background-color: ${colors.primary};
  color: white;

  
`;

const SectionContent = styled.div`
  // Add styles for section content here
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  border-radius:5px;
  background-color: ${colors.backgroundGrey};
  color:${colors.primary};
  font-size:1rem;
  font-weight:500;
  
  padding: 10px;
`;

function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionIndex) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  const renderContent = (data) => {
    if (Array.isArray(data)) {
        console.log('Rendering Equipments:');
        console.log(data);
      return (
        <ul>
          {data.map((equipment, index) => (
           <li key={index}>{equipment}</li>
        
          ))}
        </ul>
      );
    } else if (data) {
        console.log('Rendering Default:');
      console.log(data);
      return <p>{data}</p>;
    } else {
      return null; // Return null for cases where data is undefined
    }
  };

  return (
    <AccordionContainer>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionTitle onClick={() => toggleSection(index)}>
            {section.title}
            {openSections[index] ?<FaChevronDown />  : <FaChevronUp />}
          </SectionTitle>
          <SectionContent $isOpen={openSections[index]}>
            {renderContent(section.content)}
          </SectionContent>
        </Section>
      ))}
    </AccordionContainer>
  );
}

export default Accordion;
