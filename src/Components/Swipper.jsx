import React from "react";
// import Header from "./Header";
import { Carousel } from "antd";
import slide1 from "../images/1.jpg";
import slide2 from "../images/2.jpg";
import slide3 from "../images/3.jpg";
const contentStyle = {
  margin: 0,
  width: "100%",
  height: "640px",
  color: "#ffff",
  lineHeight: "560px",
  textAlign: "center",
  background: "#364d79",
};

const App = () => (
  <Carousel autoplay>
    <div>
      <img
        style={contentStyle}
        src={slide1}
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src={slide2}
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src={slide2}
        alt=""
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src={slide3}
        alt=""
      />
    </div>
  </Carousel>
);
export default App;
