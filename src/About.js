import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import {AppContext} from "./context/productcontext";
import { useProductContext } from "./context/productcontext";

const About = () => {
    const { myName } = useProductContext();
  
    const data = {
      name: "S4 Ecommerce",
    };
  
    return (
      <>
        {myName}
        <HeroSection myData={data} />
      </>
    );
  };
  
  export default About;