import React, { useState } from "react";
import Arrows from "../Arrows";
import { Box, Typography } from "@mui/material";
import CartStyle2 from "../CartStyle2";

const Carousel: React.FC = () => {
  const categories = [
    { id: "01", name: "cat 1" },
    { id: "02", name: "cat 2" },
    { id: "03", name: "cat 3" },
    { id: "04", name: "cat 4" },
    { id: "05", name: "cat 5" },
    { id: "06", name: "cat 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <Arrows next={goToNextSlide} prev={goToPreviousSlide} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "300px",
            backgroundColor: "secondary.main",
            padding: "20px",
            borderRadius: "15px",
            margin: "20px",
          }}
        >
          
          <CartStyle2 data={categories[(currentIndex - 1 + categories.length) % categories.length]}/>
        </Box>
        <Box
          sx={{
            width: "300px",
            backgroundColor: "secondary.main",
            padding: "20px",
            borderRadius: "15px",
            margin: "20px",
          }}
        >
          <CartStyle2 data={categories[currentIndex]}/>
        </Box>

        <Box
          sx={{
            width: "300px",
            backgroundColor: "secondary.main",
            padding: "20px",
            borderRadius: "15px",
            margin: "20px",
          }}
        >
          
          <CartStyle2 data={categories[(currentIndex + 1) % categories.length]}/>

        </Box>
      </Box>
    </div>
  );
};

export default Carousel;
