export default function Navbar({ data, stationFilter, setFilter }) {

  const toggleStation = (station) => {
    setFilter(stationFilter === station ? null : station);
  };

  return (
    <div className='nbContainer'>
      <h3>Select your starting station:</h3>
      <div className="navBox">
        {data == null ? <div className="loading">Loading...</div> :
          <div className="stationList">
            {data.map((station) => (
              <button
                key={station}
                style={{backgroundColor: stationFilter === station ? 'darkgray' : 'rgb(45, 45, 45)'}}
                onClick={() => toggleStation(station)}
                className="stationButton"
              >
                {station}
              </button>
            ))}
          </div>
        }
      </div>
    </div>
  );
}