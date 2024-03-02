import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import map from './train-stations-map-2020.jpg';

const About = () => {
  return (
    <>
    <header>
    <h1>About MARTA</h1>
    <nav className='about'>
        <ul>
          <li><Link to="/">Home Page</Link></li>
        </ul>
    </nav>
    </header>
    <hr></hr>
    <div className="about">
      <p>Marta is Great! Here is a map of Marta.</p>
      <img src={map} alt="New MARTA Rail Cars" />
    </div>
    </>
  );
};

export default About;
