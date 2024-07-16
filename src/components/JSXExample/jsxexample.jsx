// Javascript
// JSX
// useState
// useEffect
import { useState } from "react";
import "./style.css";
import Button from "../button";

function JSXExample(props) {
  //  Create state here
  console.log("Rendering started.....");
  const initialColors = { outer1: "", outer2: "", inner1: "", inner2: "" };
  const [colors, setColors] = useState(initialColors);
  // const [colors , setColors] = useState({outer1: '' ,  outer2: '', inner1:'' , inner2: '' })
  const initialVisibility = { outer1: true, outer2: true, inner1: true, inner2: true };
  const [visibility, setVisibility] = useState(initialVisibility);

  function toggleVisibility(id) {
    const updatedVisibility = { ...visibility };
    updatedVisibility[id] = !updatedVisibility[id];
    setVisibility(updatedVisibility);
  }

  function swapOuter() {
    const updatedColors = { ...colors };
    updatedColors.outer1 =
      updatedColors.outer1 === "bg-black" ? "bg-red" : "bg-black";
    updatedColors.outer2 =
      updatedColors.outer2 === "bg-red" ? "bg-black" : "bg-red";
    setColors(updatedColors);
  }

  function swapInner() {
    const updatedColors = { ...colors };
    updatedColors.inner1 =
      updatedColors.inner1 === "bg-yellow" ? "bg-green" : "bg-yellow";
    updatedColors.inner2 =
      updatedColors.inner2 === "bg-green" ? "bg-yellow" : "bg-green";
    setColors(updatedColors);
  }
  function handleClick(event) {
    const updatedColors = { ...colors }; // created one object  // {}

    if (event.target.id == "inner1") {
      //  Write your code here
      // updatedColors[event.target.id]  = 'bg-yellow'
      updatedColors["inner1"] = "bg-yellow";
    } else if (event.target.id == "inner2") {
      updatedColors[event.target.id] = "bg-green";
    } else if (event.target.id == "outer1") {
      updatedColors[event.target.id] = "bg-black";
    } else {
      updatedColors[event.target.id] = "bg-red";
    }
    setColors(updatedColors); // {outer1: '' ,  outer2: '', inner1:'bg-yellow' , inner2: '' };
  }
  return (
    // <div>
    //   {/* bg-yellow */}
    //   <div id="outer1" onClick={handleClick} className={colors.outer1}>
    //     {/* bg-black */}
    //     <div id="outer2" className={colors.outer2}>
    //       {/* bg-yellow  */}
    //       <div id="inner1" className={colors.inner1}>
    //         {/* bg-blue  */}
    //         <div id="inner2" className={colors.inner2}></div>
    //       </div>
    //     </div>
    //   </div>

    //   <Button handleClick={swapOuter} buttonText="Swap Outer" />
    //   <Button handleClick={swapInner} buttonText="Swap Inner" />
    //   <Button handleClick={hideOuter1} buttonText="Hide Outer1" />
    //   <Button handleClick={hideOuter2} buttonText="Hide outer2 " />
    //   <Button handleClick={hideOuter1} buttonText="Hide Inner1" />
    //   <Button handleClick={hideOuter2} buttonText="Hide Inner2" />
    // </div>
    <div>
      {visibility.outer1 && (
        <div id="outer1" onClick={handleClick} className={colors.outer1}>
          {visibility.outer2 && (
            <div id="outer2" className={colors.outer2}>
              {visibility.inner1 && (
                <div id="inner1" className={colors.inner1}>
                  {visibility.inner2 && (
                    <div id="inner2" className={colors.inner2}></div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <Button handleClick={swapOuter} buttonText="Swap Outer" />
      <Button handleClick={swapInner} buttonText="Swap Inner" />
      <Button handleClick={() => toggleVisibility("outer1")} buttonText="Hide Outer1" />
      <Button handleClick={() => toggleVisibility("outer2")} buttonText="Hide Outer2" />
      <Button handleClick={() => toggleVisibility("inner1")} buttonText="Hide Inner1" />
      <Button handleClick={() => toggleVisibility("inner2")} buttonText="Hide Inner2" />
    </div>
  );
}

export default JSXExample;
