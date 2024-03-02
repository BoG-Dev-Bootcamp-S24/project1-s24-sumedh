import '../App.css';

const Train = ({ DESTINATION, LINE, WAITING_TIME, DELAY, STATION, color }) => {
  const isOnTime = DELAY === "T0S";
  const statusClass = isOnTime ? 'on-time' : 'delayed';
  return (
    <div className={`train`}>
      <div className='train-icon'>M</div>
      <div className='train-info'>
        <div className='train-line' style={{ color: color }}>{color}</div>
        <div className='train-destination'>{STATION} → {DESTINATION}</div>
        <div className='train-arrival'>{WAITING_TIME}</div>
        <div className='train-status'>{isOnTime ? 'On Time' : 'Delayed'}</div>
      </div>
    </div>
  );
};

export default Train;