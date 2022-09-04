import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = e => {
    setResult(result.concat(e.target.className));
  }
  const handleAC = e => {
    setResult('');
  }
  const handleBackSpace = e => {
  setResult(result.slice(0, result.length - 1));
  }
  const handleAbsolute = e => {
    if(result.charAt(0) === '-') {
      setResult(result.substring(1));
    } else {
      setResult('-'+result);
    }
  }
  const handleResult = e => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Wrong calculation!');
    }
  }

  return (
    <div className="wrapper">
      <form>
        <input className="result" type="text" value={result} />
      </form>
      <div className="buttons">
        <button className='AC' id="AC" onClick={handleAC}>AC</button>
        <button className='C'id="cancel" onClick={handleBackSpace}>C</button>
        <button className='+/-' id="plusMin" onClick={handleAbsolute}>+/-</button>
        <button className='/' id="divide" onClick={handleClick}>&divide;</button>
        <button className='7' id="seven" onClick={handleClick}>7</button>
        <button className='8' id="eigth" onClick={handleClick}>8</button>
        <button className='9' id="nine" onClick={handleClick}>9</button>
        <button className='*' id="multiply"  onClick={handleClick}>&times;</button>
        <button className='4' id="four" onClick={handleClick}>4</button>
        <button className='5' id="five" onClick={handleClick}>5</button>
        <button className='6' id="six" onClick={handleClick}>6</button>
        <button className='-' id="minus" onClick={handleClick}>-</button>
        <button className='1' id="one" onClick={handleClick}>1</button>
        <button className='2' id="two" onClick={handleClick}>2</button>
        <button className='3' id="three" onClick={handleClick}>3</button>
        <button className='+' id="plus" onClick={handleClick}>+</button>
        <button className='0' id="zero" onClick={handleClick}>0</button>
        <button className='.' id="dot" onClick={handleClick}>.</button>
        <button className='=' id="equal" onClick={handleResult}>=</button>
      </div>
    </div>
  );
}

export default App;
