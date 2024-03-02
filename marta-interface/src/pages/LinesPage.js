import '../App.css';
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import TrainList from './TrainList';


export default function LinesPage() {
    const { line } = useParams();
    const [currColor, setcurrColor] = useState(line.charAt(0).toUpperCase() + line.slice(1).toLowerCase());
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [stationData, setStationData] = useState(null);
    const [stationFilter, setFilter] = useState(null);


    useEffect(() => {
      fetch(`https://midsem-bootcamp-api.onrender.com/arrivals/${currColor}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          //console.log(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching data:', error));

        fetch(`https://midsem-bootcamp-api.onrender.com/stations/${currColor}`)
        .then(response => response.json())
        .then(data => {
          setStationData(data);
          //console.log(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching data:', error));
        
    }, [currColor]);


    const setColor = (col) => {
        setcurrColor(col);
      };

  
    return (
      <div>
        <div className='Buttons'> 
          <button className='colored gold' onClick={() => setColor("Gold")}>Gold</button>
          <button className='colored red' onClick={() => setColor("Red")}>Red</button>
          <button className='colored blue' onClick={() => setColor("Blue")}>Blue</button>
          <button className='colored green' onClick={() => setColor("Green")}>Green</button>
        </div>
        <hr></hr>
        <h1>{currColor}</h1>
        <hr></hr>
        <div className='LargeContainer'>
          <div className='NavBar'>
              <NavBar color={currColor} data={stationData} stationFilter={stationFilter} onLineChange={setcurrColor} setFilter={setFilter}/>
          </div>
          <div className='TrainListMain'>
            <TrainList key={currColor} color={currColor} data={data} stationFilter={stationFilter}/>
          </div>
        </div>
      </div>
    );
  }