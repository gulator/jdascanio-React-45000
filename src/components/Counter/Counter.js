import { useState } from "react";
import './CounterStyle.css'


const Counter = ({counter, setCounter}) => {

    const onAdd = () => {
        setCounter(counter + 1)
    }

    const onSubstract = () => {
        if (counter <= 1){

        }
        else {
            setCounter(counter - 1)
        }
    }
  return (
    <div className="contenedorCounter">
        <div>
            <button className="button" onClick={onSubstract}> - </button>
        </div>        
        <div>
            <span>{counter}</span>
        </div>        
        <div>
            <button className="button" onClick={onAdd}> + </button>
        </div>        
    </div>
  )
}

export default Counter