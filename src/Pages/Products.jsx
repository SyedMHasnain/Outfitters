import React, { useEffect, useState } from 'react'
import { add } from "../Store/cartSlice";
  import { useDispatch } from "react-redux";
import Loader from '../Components/Loader';
// import TestingCard from '../Components/TestCard/TestingCard';

 const Products = () => {
  const [Loading, setLoading] = React.useState(true);

   const [ product, setProduct ] =useState([])

  //  Shortting api title 
   const shorttilte = (name, maxLength) => {
     return name.length > maxLength ? `${name.slice(0, maxLength)} ...` : name;
   };

   useEffect(()=>{
    // feTCHED aPI In usE effect 
    const fetchProduct = async ()=>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
     
      setProduct(data)
      setLoading(false)

    };
    fetchProduct()
  }
  ,[])
  
    const dispatch = useDispatch();
    const handeladd = (product) => {
      
      dispatch(add(product));
    };

  const maxNameLength = 20; 

  return (
    <>
      <div className="flex flex-wrap align-middle w-full  justify-center p-4 gap-10 mt-10">
        {Loading ? (
          <Loader />
        ) : (
          product.map((product, index) => (
            <div key={index} className="container el-wrapper page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <img className="img" src={product.image} alt="" />
                      <div className="img-info">
                        <div className="info-inner">
                          <span className="p-company"></span>
                        </div>
                        <div className="a-size">
                          {product.sizes} Available sizes :{" "}
                          <span className="size">S , M , L , XL</span>
                          <span className="p-namehover">{product.title}</span>
                        </div>
                      </div>
                    </div>

                    <div className="box-down">
                      <div className="h-bg">
                        <div className="h-bg-inner"></div>
                      </div>

                      <a className="cart" href="#">
                        <span className="p-name">
                          {shorttilte(product.title, maxNameLength)}
                        </span>
                        <span className="price">${product.price}</span>
                        <span className="add-to-cart">
                          <button
                            type="button" // Add this line
                            className="txt"
                            onClick={() => handeladd(product)}>
                            Add to Cart
                          </button>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Products