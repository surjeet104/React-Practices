import { useState } from "react";
import "./index.css";
import Button from "./button";


function Counter(){

    const [count,setCount]=useState(0);
    function increment(){
        let updateCount=count+1;
        setCount(updateCount);
    }

    function decrement(){
        let updateCount=count-1;
        if(updateCount>=0){
            setCount(updateCount);
        }
    }
    return(
        <div className="count-cont">
            <h1 className="counter" id="counter">Count: {count}</h1>
            {/* <button onClick={increment} className="increment btn" id="increment">Increment</button>
            <button onClick={decrement} className="decrement btn" id="decrement">Decrement</button> */}
            <Button classes="increment btn" handleClick={increment} buttonText="Increment"/>
            <Button classes="decrement btn" handleClick={decrement} buttonText="Decrement"/>
        </div>
    )
}

export default Counter;