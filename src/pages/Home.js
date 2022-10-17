import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Gallery from "./logement/Gallery";



const Home = ({data}) => {
  
  return (
    <>
    <main>
      <Navigation />
      <Banner text/>
      <Gallery data={ data }/>
      <Footer />
    </main>
    
    </>
    
  );
};

export default Home;
