import React, { useState } from "react";
import "./MyJSXExample.css";
import Button from "../button";

function MyJSXExample() {
  const initialColors = { outer1: "", outer2: "", inner1: "", inner2: "" };
  const [colors, setColors] = useState(initialColors);

  const initialVisibility = { outer1: true, outer2: true, inner1: true, inner2: true };
  const [visibility,setVisibility]=useState(initialVisibility);

  const toggleVisibility=(id)=>{
    console.log(1)
    const updatedVisibility={...visibility};
    updatedVisibility[id]=!updatedVisibility[id];
    setVisibility(updatedVisibility);
  }

  const swapInner=()=>{
    const updatedColors={...colors};
    updatedColors.inner1=updatedColors.inner1==="bg-black"?"bg-red":"bg-black";
    updatedColors.inner2=updatedColors.inner2==="bg-red"?"bg-black":"bg-red";
    setColors(updatedColors);
  }

  const swapOuter=()=>{
    const updatedColors={...colors};
    updatedColors.outer1=updatedColors.outer1==="bg-yellow"?"bg-green":"bg-yellow";
    updatedColors.outer2=updatedColors.outer2==="bg-green"?"bg-yellow":"bg-green";
    setColors(updatedColors);
  }

  const handleClick = (event) => {
    console.log("in")
    const updatedColors = { ...colors };
    if (event.target.id === "inner2") {
      updatedColors[event.target.id] = "bg-black";
    } else if (event.target.id === "inner1") {
      updatedColors[event.target.id] = "bg-red";
    } else if (event.target.id === "outer2") {
      updatedColors[event.target.id] = "bg-green";
    } else {
      updatedColors[event.target.id] = "bg-yellow";
    }
    setColors(updatedColors);
  };
  return (
    <div>
      {visibility.outer1&&(<div id="outer1" onClick={handleClick} className={colors.outer1}>
        {visibility.outer2&&(<div id="outer2" className={colors.outer2}>
          {visibility.inner1&&(<div id="inner1" className={colors.inner1}>
            {visibility.inner2&&<div id="inner2" className={colors.inner2}></div>}
          </div>)}
        </div>)}
      </div>)}
      <Button handleClick={swapOuter} buttonText="Swap Outer"/>
      <Button handleClick={swapInner} buttonText="Swap Inner"/>
      <Button handleClick={()=>toggleVisibility("outer1")} buttonText="Hide Outer 1"/>
      <Button handleClick={()=>toggleVisibility("outer2")} buttonText="Hide Outer 2"/>
      <Button handleClick={()=>toggleVisibility("inner1")} buttonText="Hide Inner 1"/>
      <Button handleClick={()=>toggleVisibility("inner2")} buttonText="Hide Inner 2"/>
    </div>
  );
}

export default MyJSXExample;
