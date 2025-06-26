// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Callback from "./components/Callback";
import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
import Routing from "./components/Routing";
import React, { Suspense, lazy } from "react";

const Dashboard = React.lazy(()=>import("./components/Dashboard"))
const About = lazy(()=>import("./components/About"))

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <Suspense fallback="loading about..."> <About /> </Suspense> } />
        <Route path="/dashboard" element={ <Suspense fallback="loading dash..."> <Dashboard/> </Suspense> } />
      </Routes>
      <Routing />
    </div>
  )
}

export default App;