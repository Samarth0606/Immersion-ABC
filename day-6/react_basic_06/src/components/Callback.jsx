import { memo, useCallback, useState } from "react";
export default function Callback(){
    let a = useCallback(function(){
        return 100
    } , [])
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1 onClick={()=> setCount(count+1)} >Counter Change - {count} </h1>
            <Chotu kuch={a} />
        </div>
    )
}
const Chotu = memo(function({kuch}){
    return(
        <h1>Props: {kuch()} </h1>
    )
})