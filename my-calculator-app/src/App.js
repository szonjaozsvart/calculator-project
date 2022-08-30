import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = e => {
    setResult(result.concat(e.target.name));
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
        <button name='AC' id="AC" className="highlight" onClick={handleAC}>AC</button>
        <button name='C'id="cancel" className="highlight" onClick={handleBackSpace}>C</button>
        <button name='+/-' id="plusMin" className="highlight" onClick={handleAbsolute}>+/-</button>
        <button name='/' id="divide" className="highlighter" onClick={handleClick}>&divide;</button>
        <button name='7' id="seven" onClick={handleClick}>7</button>
        <button name='8' id="eigth" onClick={handleClick}>8</button>
        <button name='9' id="nine" onClick={handleClick}>9</button>
        <button name='*' id="multiply"  className="highlighter" onClick={handleClick}>&times;</button>
        <button name='4' id="four" onClick={handleClick}>4</button>
        <button name='5' id="five" onClick={handleClick}>5</button>
        <button name='6' id="six" onClick={handleClick}>6</button>
        <button name='-' id="minus" className="highlighter" onClick={handleClick}>-</button>
        <button name='1' id="one" onClick={handleClick}>1</button>
        <button name='2' id="two" onClick={handleClick}>2</button>
        <button name='3' id="three" onClick={handleClick}>3</button>
        <button name='+' id="plus" className="highlighter" onClick={handleClick}>+</button>
        <button name='0' id="zero" onClick={handleClick}>0</button>
        <button name='.' id="dot" onClick={handleClick}>.</button>
        <button name='=' id="equal" className="highlighter" onClick={handleResult}>=</button>
      </div>
    </div>
  );
}

export default App;
