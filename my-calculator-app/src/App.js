import "./App.css";
import React, { useState } from "react";

function App() {
  // const [preState, setPreState] = useState('');
  // const [curState, setCurState] = useState('');
  // const [input, setInput] = useState(0);
  // const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const handleClick = e => {
    setResult(result.concat(e.target.name));
  }

  const AC = e => {
    setResult('')
  }
  const absolute = e => {

  }
  return (
    <div className="wrapper">
      <form>
        <input className="result" type="text" value={result} />
      </form>

      <div className="buttons">
        <button name='AC' id="AC" onClick={AC}>AC</button>
        <button name='+/-' id="plusMin" onClick={absolute}>+/-</button>
        <button name='%'id="percent" onClick={handleClick}>%</button>
        <button name='/' id="divide" onClick={handleClick}>&divide;</button>
        <button name='7' id="seven" onClick={handleClick}>7</button>
        <button name='8' id="eigth" onClick={handleClick}>8</button>
        <button name='9' id="nine" onClick={handleClick}>9</button>
        <button name='*' id="multiply" onClick={handleClick}>&times;</button>
        <button name='4' id="four" onClick={handleClick}>4</button>
        <button name='5' id="five" onClick={handleClick}>5</button>
        <button name='6' id="six" onClick={handleClick}>6</button>
        <button name='-' id="minus" onClick={handleClick}>-</button>
        <button name='1' id="one" onClick={handleClick}>1</button>
        <button name='2'id="two" onClick={handleClick}>2</button>
        <button name='3' id="three" onClick={handleClick}>3</button>
        <button name='+' id="plus" onClick={handleClick}>+</button>
        <button name='0' id="zero" onClick={handleClick}>0</button>
        <button name=',' id="comma" onClick={handleClick}>,</button>
        <button name='=' id="equal" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
