// import React from "react";
import React, {useState} from 'react'; 
function Toggle() {
  const [isOn,setIsOn]= useState(false);
  function handleClick() {
    setIsOn((isOn)=> !isOn);
  }
  let color= isOn ? "red" : "white";
  return (
    <button style={{background: color}} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
