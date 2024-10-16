import React from "react";

const Card = ({ price, img, title, key, description, product }) => {
  return (
    <div className=" flex justify-center  p-10 w-80    bg-white  rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div key={key} className="  flex-col  w-full  h-80 object-contain  ">
        <div className="flex justify-center items-center h-52 w-full ">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex justify-center align-middle ">
          <h1>{title}</h1>
        </div>

        <div className=" flex justify-center items-center  h-16">
          <h1>$ {price}</h1>
        </div>

        <div className=" flex justify-center items-center bg-green-500  rounded h-12 ">
          <h1 className=""> Add To Cart </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
