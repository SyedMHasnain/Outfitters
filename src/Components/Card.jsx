import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const App = ({products}) => (
  <div className="flex justify-center gap-12 items-center flex-col  ">
    <Card
      hoverable
      style={{
        width: 250,
        
      }}
      cover={
        <img
          src={products.image}
          style={{ height: 200, objectFit: "cover" }}
        />
      }>
      <Meta
        style={{ fontSize: 10, fontWeight: "bold" }}
        title={products.title}
        description={products.description}
      />
    </Card>  
  </div>
);
export default App;
