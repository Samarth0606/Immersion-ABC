// import React, { useEffect, useState } from 'react'

// function Clock() {
//     const [count,setCount] = useState(0);
//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setCount(count+1)
//         } , 1000)
//         return ()=>clearInterval(id)
//     } , [count])

//   return (
//     <div>Clock: {count}</div>
//   )
// }

// export default Clock

// ------------------------------------------------------

import React, { useEffect, useState } from 'react'

function Clock() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        } , 1000)
    } , [count])

  return (
    <div>Clock: {count}</div>
  )
}

export default Clock
