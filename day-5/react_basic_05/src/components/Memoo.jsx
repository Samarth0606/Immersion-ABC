import { useMemo, useState } from "react"

function Memoo(){
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInc(){setCount(count+1)}
    function handleInp(event){
        setInp(event.target.value)
    }

    const summ = useMemo( ()=>{
        let ans=0;
        for(let i=1;i<=inp;i++){
            console.log("mai loop hu chal diya");
            ans+=i;
        }
        return ans
    } ,[inp])

    

    return(
        <div>
            <input onChange={handleInp} type="number" value={inp} />
            <h1>Sum: {summ} </h1>
            <button onClick={handleInc} >Counter INC: {count}</button>
        </div>
    )
}

export default Memoo;