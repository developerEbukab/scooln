import React from 'react';
import { HeroContainer } from './Hero.styles';
import { DashedLines } from '../Utility/Utility.components';
import { Link } from 'react-router-dom';
import { HERO_ABOUT } from './Hero.utils';
import { GetStartedLink } from '../Utility/Utility.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <div className="AboutContainer">
        {HERO_ABOUT.map(({icon, text}, index) => 
          <div className={`Item ${(index === 1) && "AddSideBorders"}`} key={index}>
            <img src={icon}/>
            <h3 className="text">{text}</h3>
          </div>
        )}
      </div>
      <div className="ContentContainer">
        <h3 className="subText">LET'S PUT THE COOL BACK IN SCHOOL...</h3>
        <p className="Title">Why just go to school ,<br/> when you can  <span className="highLight">be a part of it.</span></p>
        <GetStartedLink to="/sign-up" >Let me in </GetStartedLink>
      </div>
      <div className="ImageContainer">
        <DashedLines />
        <img src="images/student.png"/>
      </div>
    </HeroContainer>
  );
}

export default Hero;
