import React from "react";
import Header from "../components/Header";
import FeaturedWorks from "../components/FeaturedWorks";

const Home: React.FC = () => {
  return (
    <div>
      <Header
        title="Craft Your Digital Legacy"
        subtitle="Showcase your creative journey in an elegant, dark-themed portfolio that puts your work in the spotlight."
        backgroundImage="https://via.placeholder.com/1920x600" // Replace with the correct background image
      />
      <FeaturedWorks />
    </div>
  );
};

export default Home;
