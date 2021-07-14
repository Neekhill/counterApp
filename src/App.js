import React, { useState } from 'react';
import Button from './Button';
import './app.css';

function App() {
  const [score, setScore] = useState(0);
  const [errMsg, setErrMsg] = useState("cannot go less than 0");
  return (
    <div className="container">
      <div >
        <h1 className="main-heading">Counter Application</h1>

        <div>
          <h3>{score}</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {(score == 25 || score == 0) ?
              <div className="errmsg">{errMsg}</div> :
              <div className="errNotVisble"></div>
            }
          </div>
        </div>

        <Button
          style="inc-btn" buttonName="+" handleClick={() => {
            score == 25 ? setErrMsg("cannot go beyond 25") : score < 25 ? setScore(score + 1) : <></>
          }} />

        <Button style="dec-btn" buttonName="-" handleClick={() => {
          score == 0 ? setErrMsg("cannot go less than 0") : score > 0 ? setScore(score - 1) : <></>
        }} />
        <Button style="reset" buttonName="Ac" handleClick={() => { setScore(0) }} />
      </div>
    </div>
  );
}

export default App;
