import React, { useState } from "react";
import "./ResInfo.css";

export default function ResInfo() {
 const [input1, setInput1] = useState(0);
 const [input2, setInput2] = useState();
 let sum = parseInt(input1)  * 1.6;


  function reset() {
    setInput1(0);
   
    
  }

  const style = {
    'border-style': 'groove',
     'border-bottom-width': '2px',
      'border-color': 'orange',
      'font-size': '1.5rem',
      'width': '220px 20px',
      
  }



  function TotalValue() {
    if (sum >= 1000) {
        return 'Har du funderat på flyg?'
    } else if (sum >= 400) {
        return 'Har du funderat på att åka tåg?'
    } else {
        return 'Resonabel resa'
    } 
};




  return (
    <>
      <div className="fl w-100 ml2 mt4">
        <label className="fl w-90">RESETRÄCKA</label>
        <input className="pl5" type="number" min="0" placeholder="Km"onChange={event => setInput1(event.target.value)}></input>
        <br />
        <br />
        <label className="fl w-90 ml1">BRÄNSLEFÖRBRUKNING</label>
        <input className="pl5" type="" placeholder="L / 100 Km" />
        <br />
        <br />
        <label className="fl w-90">BENSIN- 98</label>
        <input className="pl5" type="" placeholder="16,00 Kr/L"onChange={event => setInput2(event.target.value)}></input>
        <br />
        <br />
        <div>
        <button onClick={reset} className="fl mb3">RENSA</button>
         <div className="fr mr3"><h5>{TotalValue()}</h5>
        <h4 style={ style } className="fr pr2 pl2 mr3 pt1">Total pris: {sum}</h4>
       
        </div>
        </div>
      </div>
    </>
  );
}
