import React from 'react';
import {  AboutContainer, InfoItem  } from './About.styles';
import { ABOUT_DETAILS } from './About.utils';

const About = () => {
  return (
    <AboutContainer>
      {ABOUT_DETAILS.map(({id, title, image, text}) =>
        <InfoItem key={id}>
          <img src={image}/>
          <div className="Details">
            <p className="Title">{title}</p>
            <p className="">{text}</p>
          </div>
        </InfoItem>
      )}
    </AboutContainer>
  );
}

export default About;
