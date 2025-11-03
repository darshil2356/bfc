import React from "react";
import Carousel from "../components/Home/Carousel";
import SelectionBar from "../components/Home/SelectionBar";
import InsurancePlans from "../components/Home/InsuarancePlans";
import SearchByCategory from "../components/Home/SearchByCategory";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WhyLIC from "../components/Home/WhyLIC";
import CalculatorSection from "../components/Home/CalculatorSection";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <SelectionBar />
      <InsurancePlans />
      <SearchByCategory />
      {/* <WhyLIC /> */}
      <CalculatorSection />
      <Footer />
    </div>
  );
}

export default HomePage;
