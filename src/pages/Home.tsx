import React from "react";
import Hero from "../components/Hero/Hero";
import CategoriesSection from "../components/sections/CategoriesSection";
import NewArrivalsSection from "../components/sections/NewArrivalsSection";
import { Box, Divider, Typography } from "@mui/material";
import StepsSection from "../components/sections/StepsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <NewArrivalsSection />
      <Divider sx={{ backgroundColor: "secondary.contrastText" , margin:"80px 0"}} />
      <StepsSection/>
      <Divider sx={{ backgroundColor: "secondary.contrastText", margin:"80px 0" }} />


    </div>
  );
};

export default Home;
