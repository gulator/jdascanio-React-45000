import { useState } from "react";
import './CounterStyle.css'


const Counter = () => {

    const [counter, setCounter] = useState (0);

    const onAdd = () => {
        setCounter(counter + 1)
    }

    const onSubstract = () => {
        if (counter <= 0){

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
        <h3>{counter}</h3>
        <div>
            <button className="button" onClick={onAdd}> + </button>
        </div>        
    </div>
  )
}

export default Counter