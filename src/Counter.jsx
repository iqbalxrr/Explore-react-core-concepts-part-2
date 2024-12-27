import { useState } from "react"

export default function Counter(){

    const [ count , setCount] = useState(0);
       
    const handalAdd = () =>{

      const  newCount = count + 1;

        setCount(newCount);
    }
    const handalRedus = () =>{
       const  newCount = count - 1; 

        setCount(newCount)
    }
    return(
        <div style={{ border: '2px solid tomato ', margin: '20px', padding: '10px' }}>

            <h3>Counter : {count} </h3>

            <button onClick={handalAdd}>Add</button>

            <button onClick={handalRedus}>Reduce</button>

        </div>
    )
}