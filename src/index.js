import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
// import Chkoutform from './Pages/Cart/ChkoutForm';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';

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
        path: "Payment",
        element: <Payment/>,
      },
      {
        path: "Cart",
        element: <Cart/>,
      },
    
      {
        path: "Products",
        element: <Products/>,
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
