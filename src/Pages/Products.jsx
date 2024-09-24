import React, { useEffect, useState } from 'react'
import SideNavi from '../Components/Sidenav'
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
//  const products = [
//    {
//      id: 1,
//      name: "Product 1",
//      description: "This is a great product.",
//      price: 29.99,
//      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//    },
//    {
//      id: 2,
//      name: "Product 2",
//      description: "This is another great product.",
//      price: 19.99,
//      image:
//        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//    },
//    // Add more products as needed
//  ];
 const Products = () => {

   const [ product, setProduct ] =useState([])

   useEffect(()=>{

    const fetchProduct = async ()=>{
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      console.log(data)
      setProduct(data)

    };
    fetchProduct()
  }
  ,[])

    const dispatch = useDispatch();
    const handeladd = (product) => {
      dispatch(add(product));
    };

  return (
    <>
      <SideNavi />
      <div className="flex flex-wrap align-middle w-full  justify-center p-4 gap-10 mt-10">
        {product.map((product) => (
          <div  key={product.id}className="max-w-sm rounded  overflow-hidden shadow-lg bg-white">
            <img
              className="w-30 h-20 object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{product.name}</h2>
              <div className="flex justify-between items-center ">
                <span className="text-lg font-semibold mr-5">
                  ${product.price}{" "}
                </span>
                <button
                  onClick={()=>handeladd(product)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-black">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products