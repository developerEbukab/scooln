import React from 'react';
import { AboutDetailsContainer } from './AboutDetails.styles';
import { GetStartedLink } from '../Utility/Utility.styles';
import { ABOUT_DETAILS } from './AboutDetails.utils';

const AboutDetails = () => {
  return (
    <>
      {ABOUT_DETAILS.map(({LinkTo,LinkText,DetailsText,DetailsTitle,alertMessage,alertTime,alertTitle,image}, index)=>
        <AboutDetailsContainer reverse={index === 1 ? true : false} firstDetail={index === 0 ? true : false}>
          <div className="ImageContainer">
            <img className="Image" src={image} />
            <img className="DotPattern Left" src="images/dot-grid.png" />
            <img className="DotPattern Right" src="images/dot-grid.png" />
            <div className="DetailsBox">
              <div className="Heading">
                <p className="Title">{alertTitle}</p>
                <p className="Time">{alertTime}</p>
                <div className="IconContainer">
                  <img src="https://img.icons8.com/ios-filled/30/004c00/bell.png"/>
                </div>
              </div>
              <div className="Content">
                <img src="https://img.icons8.com/pastel-glyph/50/801936/new-message--v1.png" />
                <p className="Text">{alertMessage}</p>
              </div>
            </div>
          </div>
          <div className="ContentsContainer">
            <p className="subTitle">{alertTitle}</p>
            <p className="Title">{DetailsTitle} </p>
            <p className="Text">{DetailsText}</p>
            <GetStartedLink to={LinkTo} >{LinkText}</GetStartedLink>
          </div>
        </AboutDetailsContainer>
      )}
    </>
  );
}

export default AboutDetails;
