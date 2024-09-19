import React from "react";
// import Card from "./Components/Card";
// import Swipper from "./Components/Swipper";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store/store'
const App = () => {
  return (
    <Provider store={store} >
     <Header/>
     <Outlet/>
     <Footer/>
    
    </Provider>
  );
};
export default App;
