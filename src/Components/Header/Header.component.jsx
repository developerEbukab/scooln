import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, StyledLink, LogoContainer, CallToActionButton, SearchContainer } from './Header.styles';
import { HEADER_LINKS } from './Header.uitls';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        {HEADER_LINKS.map(({to, name}, index) => <StyledLink to={to} activeClassName="ActiveLink" exact>{name}</StyledLink>)}
      </div>
      <LogoContainer>
        <p>SCOOLN</p>
      </LogoContainer>
      <div>
        <SearchContainer>
          <input type="text" placeholder="Search for school" />
          {/* <i className="fas fa-search"></i> */}
          <div className="SubmitButtonContainer">
            <img src="https://img.icons8.com/metro/18/801936/long-arrow-right.png"/>
          </div>
        </SearchContainer>
        <CallToActionButton to="/sign-in" activeClassName="ActiveCallToActionButton" exact>Sign In</CallToActionButton>
      </div>
    </HeaderContainer>
  );
}

export default Header;
