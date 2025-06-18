import axios from "axios";
import { useEffect, useState } from "react";

function AxiosEffect(){
    const [data,setData] = useState([])
    const API = "https://api.tvmaze.com/search/shows?q=girls"
    
    useEffect(()=>{
        async function calling(){
            const resp = await axios.get(API)
            console.log(resp.data);
            setData(resp.data)
        }
        calling()
    },[API])
    
    return(
        <div>
            {
                data.map((item,index)=>{
                    return(
                        <div>
                            <h1>{item.score}</h1>
                            <h1>{item.show.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosEffect