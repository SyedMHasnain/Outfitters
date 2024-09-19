import React from "react";
// import Card from "./Components/Card";
// import Swipper from "./Components/Swipper";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    
    </>
  );
};
export default App;
