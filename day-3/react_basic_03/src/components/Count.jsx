import { useState } from "react"
function Counter(){
    const [count,setCount] = useState(0)
    function handleDec(){
        console.log(count , "1");
        setCount((count)=>count-1)
        console.log(count , "2");
        setCount((count)=>count-1)
        console.log(count , "3");
        setCount((count)=>count-1)
        console.log(count , "4");
    }
    function handleInc(){
        setCount(count+1)
    }
    return(
        <div>
            <button onClick={()=>handleDec()}>-</button>
            <h1>Count: {count} </h1>
            <button onClick={handleInc}>+</button>
        </div>
    )
}
export default Counter;