import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import martaTrainImage from './new MARTA rail cars 9.png';

const Home = () => {
  return (
    <>
    <header>
      <h1 className='Title'>MARTA</h1>
      <nav className='about'>
        <ul>
          <li><Link to="/about">About MARTA</Link></li>
        </ul>
      </nav>
    </header>
      <hr />
      <div className="home">
        <h1>VIEW ROUTES SCHEDULE</h1>
        <div className='side'>
        <nav>
          <ul>
            <li><Link to="/lines/gold">Gold Line</Link></li>
            <li><Link to="/lines/red">Red Line</Link></li>
            <li><Link to="/lines/green">Green Line</Link></li>
            <li><Link to="/lines/blue">Blue Line</Link></li>
          </ul>
        </nav>
        <img src={martaTrainImage} alt="New MARTA Rail Cars" />
        </div>

      </div>
    </>
  );
};

export default Home;
