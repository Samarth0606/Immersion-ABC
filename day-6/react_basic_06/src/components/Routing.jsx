import { Link, useNavigate } from "react-router-dom"
function Routing(){
    const navigate = useNavigate()
    function handleDash(){ navigate('/dashboard') }
    function handleAbout(){ navigate('/about') }
    return(
        <div>
            {/* <a href="/dashboard">Visit Dashboard</a> */}
            <Link to="/dashboard" >Visit Dashboard</Link>
            {/* <a href="/about">Visit About</a> */}
            <Link to="/about" >Visit About</Link>
            <button onClick={handleDash} >Navigate Dashboard</button>
            <button onClick={handleAbout}>Navigate About</button>
        </div>
    )
}
export default Routing