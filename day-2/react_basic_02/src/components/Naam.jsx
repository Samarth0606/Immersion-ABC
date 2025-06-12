// function Naam(props) {
//     console.log(props);


//   return (
    //     <div>
    //         <h1>Naam: </h1>
    //         <button>NAAM BADAL DUNGA</button>
    //     </div>
    //   )
    // }
    
    // export default Naam
    
// ----------------------------
import { useState } from "react";

function Naam({name,age,isMarried,favColor}) {
    const [naaaam,setNaaaam ] = useState(name)
    function handleChangeName(){
        console.log(naaaam , "before");
        setNaaaam("CALM")
        console.log(naaaam , "after");
    }

  return (
    <div>
        <h1>Naam: {naaaam} </h1>
        <button onClick={handleChangeName} >NAAM BADAL DUNGA</button>
    </div>
  )
}

export default Naam