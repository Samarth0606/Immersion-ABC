import { useEffect, useState } from "react"

function Lifecycle() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){
            console.log("Component Did mount");
        }
        else if(count<5){
            console.log("Component Did Update");
        }
        else if(count === 5){
            return ()=>{console.log("component will unmount");}
        }
    } , [count])

    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
        <h1>Lifecycle</h1>
        <button onClick={handleClick}>Count: {count}</button>
    </div>
  )
}

export default Lifecycle