// const { Fragment } = require("react");

import Car , {Samarth , Vohra} from "./components/Header";
import Div , {footer} from "./components/footer";

function App(){
  return(
    <>
      <div>
        <h1>Hello from App</h1>
        <Car />
        <Samarth />
        <Vohra />
        {/* <footer /> */}
        <Div />
        {/* <div></div> */}
        {/* <Header> </Header> */}
        {/* { Header() } */}
      </div>
    </>
  )
}


export default App;