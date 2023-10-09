import React from 'react';
import Accordion from '../../components/accordian/';


const Propose =()=>{
  //Define sections for each topic



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
    <div>
      <Accordion sections={disclaimerSections} />
      <Accordion sections={respectSections} />
      <Accordion sections={serviceSections} />
      <Accordion sections={securitySections} />
     
    </div>
  )

}

export default Propose