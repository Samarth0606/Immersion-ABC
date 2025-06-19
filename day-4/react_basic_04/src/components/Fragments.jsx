import { memo, useState } from "react"

function Fragments() {
   const [firstName,setFirstName] = useState("Samarth")
  function handleClick(){
    setFirstName(Math.floor(Math.random()*10))
  }
  return (<div>
            <Chotu naam={firstName} />
            <button onClick={handleClick}>Naam badal dunga</button>
            <Chotu naam="Vohra" />
            <Chotu naam="Maverick" />
          </div>
  )
}
const Chotu = memo(function({naam}){
    return(
        <div>
            <h1> Hello from : {naam}  </h1>
        </div>
    )
})

export default Fragments