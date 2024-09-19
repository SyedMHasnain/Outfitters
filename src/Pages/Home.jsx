import React from "react";
import Swipper from "../Components/Swipper";
import Card from "../Components/Card";
const products = [
  {
    title: "T-shirt",
    price: "50",
    rating: "4",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,",
  },
  {
    title: "T-shirt",
    price: "50",
    rating: "4",
    image:
      "https://images.unsplash.com/photo-1678872844677-d650b788709b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,",
  },
  {
    title: "T-shirt",
    price: "50",
    rating: "4",
    image:
      "https://images.unsplash.com/photo-1499713907394-43c9d094ac2e?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,",
  },
  {
    title: "T-shirt",
    price: "50",
    rating: "4",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eum, neque deserunt quisquam,",
  },
]; 
const Home = () => {
  return (
    <>
      <div className="">
        <Swipper  />
      </div>
      <div className=" flex justify-around  flex-wrap p-8 ">
        {products.map((item, index) => (
        
            <div className={"flex justify-center gap-12 items-center flex-col  mt-4 max-[640px]:mr-5"}>
              <Card products={item} />
            </div>
        
        ))}
      </div>
    </>
  );  
};

export default Home;
