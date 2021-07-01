import React, { useState } from "react";
import "./ResInfo.css";

export default function ResInfo() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  let totalSum = parseInt(input1) * parseInt(input2) * parseInt(input3);

  
  
   function reset() {
    setInput1(0);
    setInput2(0);
    setInput3(0);
  }

  const style = {
    "border-style": "groove",
    "border-bottom-width": "2px",
    "border-color": "orange",
    "font-size": "1.5rem",
    width: "220px 20px",
  };

  function TotalValue() {
    if (totalSum >= 1000) {
      return "Har du funderat på flyg?";
    } else if (totalSum >= 400) {
      return "Har du funderat på att åka tåg?";
    } else {
      return "Resonabel resa";
    }
  }

  return (
    <>
      <div className="fl w-100 ml2 mt4">
        <label data-testid="Resa" className="fl w-90">RESETRÄCKA</label>
        <input data-testid="Input"
          className="pl5"
          type="number"
          value={input1}
          min="0"
          placeholder="Km"
          onChange={(event) => setInput1(parseInt(event.target.value))}
        ></input>
        <br />
        <br />
        <label data-testid="Bränsle" className="fl w-90 ml1">BRÄNSLEFÖRBRUKNING</label>
        <input className="pl5" type="number" min="0" placeholder="L / 100 Km" onChange={(event) => setInput2(event.target.value)}
        ></input>
        <br />
        <br />
        <label data-testid="Bensin" className="fl w-90">BENSIN- 98</label>
        <input
          className="pl5"
          type="number"
          min="0"
          placeholder="16,00 Kr/L"
          onChange={(event) => setInput3(event.target.value)}
        ></input>
        <br />
        <br />
        <div>
          <button data-testid="Rensa"  onClick={reset} className="fl mb3">
            RENSA
          </button>
          <div className="fr mr3">
            <h5>{TotalValue()}</h5>
            <h4 style={style} className="fr pr2 pl2 mr3 pt1">
              Total pris:{totalSum}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
