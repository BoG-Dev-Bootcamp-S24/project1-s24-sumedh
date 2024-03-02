import Train from '../components/Train';
import { useState, useEffect } from "react";
import '../App.css';

export default function TrainList(props) {
  const { color, data, stationFilter } = props;
  const [arrivingFilter, setArrivingFilter] = useState(null);
  const [directionFilter, setDirectionFilter] = useState(null);
  const [filteredTrain, setFilteredTrains] = useState([]);

  useEffect(() => {
    filterData();
  }, [data, stationFilter, arrivingFilter, directionFilter]);
  function filterData() {
    if (!data) {
      setFilteredTrains([]);
      return;
    }

    let filtered = data
      .filter(train => {
        return train.LINE.toLowerCase() === color.toLowerCase();
      })
      .filter(train => {
        return stationFilter ? train.STATION.toUpperCase() === (stationFilter.toUpperCase()+" STATION") : true;
      })
      .filter(train => {
        if (arrivingFilter === 'A') {
          return train.WAITING_TIME === "Arriving";
        } else if (arrivingFilter === 'S') {
          return train.WAITING_TIME !== "Arriving";
        }
        return true;
      })
      .filter(train => {
        if (directionFilter) {
          return train.DIRECTION === directionFilter;
        }
        return true;
      });

    setFilteredTrains(filtered);
  }

  return (
    <div className="TrainContainer">
      <div className="filterButtons">
      <button class="filterButton" style={{backgroundColor: arrivingFilter == 'A' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
          arrivingFilter == 'A'? setArrivingFilter(null) : setArrivingFilter('A')}>Arriving</button>
        
        <button class="filterButton" style={{backgroundColor: arrivingFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
          arrivingFilter == 'S'? setArrivingFilter(null) : setArrivingFilter('S')}>Scheduled</button>
        
        {color == 'gold' || color == 'red' ? 
        <>
          <button class="filterButton" style={{backgroundColor: directionFilter == 'N' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            directionFilter == 'N' ? setDirectionFilter(null) : setDirectionFilter('N')}>Northbound</button>
          
          <button class="filterButton" style={{backgroundColor: directionFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            directionFilter == 'S' ? setDirectionFilter(null) : setDirectionFilter('S')}>Southbound</button>
        </> :
        <>
          <button class="filterButton" style={{backgroundColor: directionFilter == 'E' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            directionFilter == 'E' ? setDirectionFilter(null) : setDirectionFilter('E')}>Eastbound</button>
          
          <button class="filterButton" style={{backgroundColor: directionFilter == 'W' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            directionFilter == 'W' ? setDirectionFilter(null) : setDirectionFilter('W')}>Westbound</button>
        </>}
      </div>
      <div className='train-list'>
        {data == null ? <div className="noTrainsText">Loading...</div> : 
        filteredTrain.length === 0 ? <div className="noTrainsText">Loading...</div> : 
        filteredTrain.map((train) => 
            <Train key={train.TRAIN_ID} {...train} color={color}/>
          )}
      </div>
    </div>
  );
}

//   return (
//     <div className="TrainContainer">
//       <div className="filterButtons">
//       <button class="filterButton" style={{backgroundColor: arrivingFilter == 'A' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//           arrivingFilter == 'A'? setArrivingFilter(null) : setArrivingFilter('A')}>Arriving</button>
        
//         <button class="filterButton" style={{backgroundColor: arrivingFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//           arrivingFilter == 'S'? setArrivingFilter(null) : setArrivingFilter('S')}>Scheduled</button>
        
//         {color == 'gold' || color == 'red' ? 
//         <>
//           <button class="filterButton" style={{backgroundColor: directionFilter == 'N' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//             directionFilter == 'N' ? setDirectionFilter(null) : setDirectionFilter('N')}>Northbound</button>
          
//           <button class="filterButton" style={{backgroundColor: directionFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//             directionFilter == 'S' ? setDirectionFilter(null) : setDirectionFilter('S')}>Southbound</button>
//         </> :
//         <>
//           <button class="filterButton" style={{backgroundColor: directionFilter == 'E' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//             directionFilter == 'E' ? setDirectionFilter(null) : setDirectionFilter('E')}>Eastbound</button>
          
//           <button class="filterButton" style={{backgroundColor: directionFilter == 'W' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
//             directionFilter == 'W' ? setDirectionFilter(null) : setDirectionFilter('W')}>Westbound</button>
//         </>}
//       </div>
//       <div className='train-list'>
//         {data == null ? <div className="noTrainsText">Loading...</div> : 
//         filteredData.length === 0 ? <div className="noTrainsText">No Current Trains Match Filters</div> : 
//         filteredData.map((train) => 
//             <Train key={train.TRAIN_ID} {...train} color={color}/>
//           )}
//       </div>

//     </div>
//   );
// }

