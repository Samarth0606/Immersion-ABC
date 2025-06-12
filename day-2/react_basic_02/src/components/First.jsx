
function First() {
    // upar vaali duniya
    
    //neeche vaali duniya
    return (
    <div>
        {
        Math.floor(Math.random()*10) === 7 ? <h1>WON</h1> :<h1>Next TIME</h1>
        }
    </div>
  )
}

export default First