import React from 'react';
import About from '../../Components/About/About.component';
import Header from '../../Components/Header/Header.component';
import Hero from '../../Components/Hero/Hero.component';
import { } from "./Home.module.scss";
import AboutDetails from '../../Components/AboutDetails/AboutDetails.component';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutDetails />
    </React.Fragment>
  );
}

export default Home;
