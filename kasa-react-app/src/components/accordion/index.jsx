import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import colors from '../../utils/styles/colors';

// Define a styled component for the container
const AccordionContainer = styled.div`
  width: 100%; // Set the width to 100%
  display: flex; // Display children elements in a row
`;

// Define a styled component for individual sections
const Section = styled.div`
  font-family: 'Montserrat', sans-serif; // Set the font family
  width: 100%; // Set the width to 100%
`;

// Define a styled component for section titles
const SectionTitle = styled.div`
  display: flex; // Display elements in a row
  justify-content: space-between; // Space between elements
  padding: 5px; // Add padding
  cursor: pointer; // Set the cursor to a pointer
  border-radius: 5px; // Add border radius
  align-items: center; // Align items in the center
  font-family: 'Montserrat', sans-serif; // Set the font family
  background-color: ${colors.primary}; // Set background color
  color: white; // Set text color
`;

// Define a styled component for section content
const SectionContent = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')}; // Conditionally display content
  border-radius: 5px; // Add border radius
  background-color: ${colors.backgroundGrey}; // Set background color
  color: ${colors.primary}; // Set text color
  font-size: 1rem; // Set font size
  font-weight: 500; // Set font weight
  padding: 10px; // Add padding
`;

// Define the Accordion component
function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState({});

  // Function to toggle section visibility
  const toggleSection = (sectionIndex) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex],
    }));
  };

  // Function to render section content
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

  // Render the Accordion
  return (
    <AccordionContainer>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionTitle onClick={() => toggleSection(index)}>
            {section.title}
            {openSections[index] ? <FaChevronDown /> : <FaChevronUp />}
          </SectionTitle>
          <SectionContent $isOpen={openSections[index]}>
            {renderContent(section.content)}
          </SectionContent>
        </Section>
      ))}
    </AccordionContainer>
  );
}

// Define PropTypes for the Accordion component
Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    })
  ).isRequired,
};

export default Accordion;
