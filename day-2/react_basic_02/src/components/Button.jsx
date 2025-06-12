function Button(){
    function samarth(a,b){
        console.log(a,b);
    }
    return(
        <div>
            <button onClick={samarth} >Click me please!!</button>
            <button onClick={()=>samarth("vohra" , "maverick")} >Click me please 2!!</button>
        </div>
    )
}

export default Button;