import { useEffect, useState } from "react";
 function Effect(){
    const [movie,setMovie] = useState([])
    const API = "https://api.tvmaze.com/search/shows?q=girls"
    useEffect( function(){
        fetch(API)
        .then((data)=>{
            return data.json()
        })
        .then((res)=>{
            console.log(res , "resp");
            setMovie(res)
        })
    } , [API])
    return(
        <div>
            <h1>Effect</h1>
        </div>
    )
 }

export default Effect;

