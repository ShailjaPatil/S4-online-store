import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";


const Home =  () =>{
    const data= {
        name: "S4 online Store",
    };
    return (
    <><HeroSection myData={data}/>;
    <Services/>
     <Trusted/>  {/*//This is not working */}

    </>
    );
};



export default Home;