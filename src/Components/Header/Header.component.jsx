import React from 'react';
import { NavLink } from 'react-router-dom';
import {HeaderContainer, Content, Search, Logo, Links, Auth, Active, FindSchool, SearchBar} from "./Header.module.scss"

const Header = () => {
  return (
    <div className={HeaderContainer}>
      <div className={Content}>
        <div className={Search}>
          <div className={FindSchool}>
            <p>Find School</p>
            <div className={SearchBar}>
              <i class="fas fa-search"></i>
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className={Logo}>
          <img src="https://img.icons8.com/bubbles/50/000000/school.png"/>
        </div>
        <div className={Links}>
          <NavLink to="/1" activeClassName={Active}>Reviews</NavLink>
          <NavLink to="/2" activeClassName={Active}>Find School</NavLink>
          <NavLink className={Auth} to="/3" activeClassName={Active}>Sign In</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
