import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Chkoutform from './Pages/ChkoutForm';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "Services",
        element: <Services/>,
      },
      {
        path: "Cart",
        element: <Cart/>,
      },
      {
        path: "Products",
        element: <Products/>,
      },
      {
        path: "Chkout-Form",
        element: <Chkoutform/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
