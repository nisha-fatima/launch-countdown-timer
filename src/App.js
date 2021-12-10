import React from 'react'
import './App.css';
import Card from './Components/common/card';
import CountdownTimer from './Components/common/CountdownTimer/CountdownTimer'

function App() {

  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  return (
    <div className="container">
      <div className="text">
        <h3>WE'RE LAUCHING SOON</h3>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CountdownTimer
        date={`${year}-12-24T00:00:00`} />
      </div>
      <div className="header"></div>
    </div>

  );
}

export default App;
